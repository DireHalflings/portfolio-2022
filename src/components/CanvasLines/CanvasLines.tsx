import React, { useRef, useEffect } from 'react';
import { Line } from '../../types';

type CanvasLinesProps = {
  
};

const CanvasLines:React.FC<CanvasLinesProps> = () => {

  useEffect(() => {
    drawLines();
  }, []);

  const canvas = useRef<HTMLCanvasElement | null>(null);
  const drawLines = () => {

    const displayCanvas = canvas.current;
    if (displayCanvas === null) return;
    displayCanvas.width = window.innerWidth;
    displayCanvas.height = window.innerHeight;
    const ctx = displayCanvas.getContext('2d');

    if (ctx === null) return;

    // SETTINGS
    let w = displayCanvas.width = window.innerWidth;
    let h = displayCanvas.height = window.innerHeight
    const minDist = 10;
    const maxDist = 30;
    const initialWidth = 15;
    const maxLines = 500;
    const initialLines = 8;
    const speed = 2;
    let cancel = false;

    let lines: Array<Line> = [];
    let frame = 0;
    let timeSinceLast = 0;

    const dirs = [
      [ 0, 1 ],
      [ 1, 0 ],
      [ 0, -1 ],
      [ -1, 0 ],
      // [ .7, .7 ],
      // [ .7, -.7 ],
      // [ -.7, .7 ],
      // [ -.7, -.7]
    ];

    const starter: Line = {
      x: w / 2,
      y: h / 2,
      vx: 0,
      vy: 0,
      width: initialWidth,
      dist: 0,
      dead: false
    };

    const newLine = (parent?: Line): Line => {
      let line: Line = {
        x: parent?.x ?? 0,
        y: parent?.y ?? 0,
        width: parent?.width ?? 0,
        vx: 0,
        vy: 0,
        dist: 0,
        dead: false
      };

      line.width = line.width / 1.25;

      if (parent) {
        do {
          const dir = dirs[( Math.random() * dirs.length ) | 0]
          line.vx = dir[0];
          line.vy = dir[1];
        } while ((line.vx === -parent.vx && line.vy === -parent.vy) || (line.vx === parent.vx && line.vy === parent.vy));
      }

      line.vx *= speed;
      line.vy *= speed;

      line.dist = (Math.random()*(maxDist - minDist) + minDist);

      return line;
    }

    const stepLine = (line: Line) => {
      const prevX = line.x;
      const prevY = line.y;

      line.x += line.vx;
      line.y += line.vy;

      line.dist = line.dist-1;

      if (line.x < 0 || line.x > w || line.y < 0 || line.y > h) {
        line.dead = true;
      }

      if (line.dist <= 0 && line.width > 1) {
        line.dist = Math.random() * ( maxDist - minDist ) + minDist;

        if (lines.length < maxLines) lines.push(newLine(line));
        if (lines.length < maxLines && Math.random() < 0.5) lines.push(newLine(line));

        if (Math.random() < 0.2) line.dead = true;
      }

      ctx.strokeStyle = ctx.shadowColor = getColor(line.x);
      ctx.beginPath();
      ctx.lineWidth = line.width;
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(prevX, prevY);
      ctx.stroke();

      return line;
    }

    const init = () => {
      cancel = false;
      lines.length = 0;

      for (let i = 0; i < initialLines; i++) {
        lines.push(newLine(starter));
      }

      ctx.fillStyle = '#222';
      ctx.fillRect(0, 0, w, h);
    }

    // const getColor = (x: number) => `hsl(${ x / w * 360 + frame }, 80%, 50%)`;
    const getColor = (x: number) => `hsla(224.85981308411215, 45.922746781115876%, 54.31372549019608%, 0.438)`;
    
    const anim = () => {
      if (cancel) return;
      window.requestAnimationFrame( anim );
      frame++;

      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0,0,0,.02)';
      ctx.fillRect( 0, 0, w, h );
      ctx.shadowBlur = .5;

      
      lines = lines.filter(line => line.dead !== true);
      lines.map(line => stepLine(line));

      timeSinceLast++;
      if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < 0.5) {
        timeSinceLast = 0;
        lines.push(newLine(starter));

        ctx.shadowColor = getColor(starter.x);
        ctx.beginPath();
        ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleResize = () => {
      window.onresize = () => {
        ctx.beginPath();

        w = displayCanvas.width = window.innerWidth;
        h = displayCanvas.height = window.innerHeight;
        starter.x = w / 2;
        starter.y = h / 2;

        cancel = true;

        init();
      }
    }

    handleResize();
    init();
    anim();
  }
  
  return (
    <canvas ref={ canvas }></canvas>
  );
}
export default CanvasLines;