import React, { useRef, useEffect, useState } from 'react';
import { useWindowSize } from '../../hooks';
import { Line, Settings } from '../../types';

type CanvasLinesProps = {
  
};

const CanvasLines:React.FC<CanvasLinesProps> = () => {

  const windowSize = useWindowSize();

  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(true);

  const canvas = useRef<HTMLCanvasElement | null>(null);
  let animRef = useRef<number>(0);

  useEffect(() => {
    drawLines();
    return () => window.cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    window.cancelAnimationFrame(animRef.current);
    drawLines();
  }, [windowSize])

  const newLine = (settings: Settings, parent?: Line): Line => {
    const { dirs, speed, maxDist, minDist } = settings;

    let line: Line = {
      x: parent?.x ?? 0,
      y: parent?.y ?? 0,
      width: parent?.width ?? 1.25,
      vx: 0,
      vy: 0,
      dist: 0,
      dead: false
    };

    line.width = Math.random() * 10;

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

  const getColor = (x: number) => `hsla(224.85981308411215, 45.922746781115876%, 54.31372549019608%, 0.438)`;

  const init = (settings: Settings, lines: Array<Line>, starter: Line) => {

    const { initialLines, ctx, w, h } = settings;

    for (let i = lines.length; i < initialLines; i++) {
      lines.push(newLine(settings, starter));
    }

    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, w, h);
  }

  const stepLine = (settings: Settings, lines: Array<Line>, line: Line) => {

    const { minDist, maxDist, maxLines, ctx, w, h } = settings;

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

      if (lines.length < maxLines) lines.push(newLine(settings, line));
      if (lines.length < maxLines && Math.random() < 0.5) lines.push(newLine(settings, line));

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

  const anim = (settings: Settings, lines: Array<Line>, starter: Line, uniqueId?: string) => {
    const tempSettings = settings;

    const { ctx, w, h, initialWidth, maxLines } = settings;

    tempSettings.frame++;

    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,.02)';
    ctx.fillRect(0, 0, w, h);
    ctx.shadowBlur = .5;

    
    lines = lines.filter(line => line.dead !== true);
    lines.map(line => stepLine(settings, lines, line));

    tempSettings.timeSinceLast++;
    if (lines.length < maxLines && tempSettings.timeSinceLast > 10 && Math.random() < 0.5) {
      tempSettings.timeSinceLast = 0;
      lines.push(newLine(tempSettings, starter));

      ctx.shadowColor = getColor(starter.x);
      ctx.beginPath();
      ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2);
      ctx.fill();
    }

    animRef.current = window.requestAnimationFrame( () => anim(tempSettings, lines, starter, uniqueId) );
  }

  const drawLines = () => {
    const displayCanvas = canvas.current;
    if (displayCanvas === null) return;

    displayCanvas.width = window.innerWidth;
    displayCanvas.height = window.innerHeight;

    const ctx = displayCanvas.getContext('2d');
    if (ctx === null) return;

    let w = displayCanvas.width = window.innerWidth;
    let h = displayCanvas.height = window.innerHeight;

    const settings: Settings = {
      minDist: 10,
      maxDist: 30,
      initialWidth: 15,
      maxLines: 200,
      initialLines: 8,
      dirs: [
        [ 0, 1 ],
        [ 1, 0 ],
        [ 0, -1 ],
        [ -1, 0 ],
      ],
      speed: 2,
      ctx: ctx,
      w: w,
      h: h,
      frame: 0,
      timeSinceLast: 0
    };

    let lines: Array<Line> = [];

    const starter: Line = {
      x: w / 2,
      y: h / 2,
      vx: 0,
      vy: 0,
      width: settings.initialWidth,
      dist: 0,
      dead: false
    };

    init(settings, lines, starter);
    anim(settings, lines, starter);
  }
  
  return (
      <canvas className="canvas-lines" ref={ canvas }></canvas>
  );
}
export default CanvasLines;