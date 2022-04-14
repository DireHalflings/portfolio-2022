import React, { useState, useRef, useEffect } from 'react';
import { FractalSettings, Circle, Point, PointList } from '../../types';

type FractalFolderProps = {
  
};

const FractalFolder:React.FC<FractalFolderProps> = () => {

  const [canvasSupport, setCanvasSupport] = useState(!!window.HTMLCanvasElement);
  const fractalCanvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    generateFractal();
  }, []);

  const generateFractal = () => {
    if (fractalCanvas === null) return;

    const displayCanvas = fractalCanvas.current;
    const context = displayCanvas?.getContext('2d');
    const displayWidth = displayCanvas?.width || 0;
    const displayHeight = displayCanvas?.height || 0;

    const fractalSettings: FractalSettings = {
      numCircles: 15,
      circles: [],
      maxMaxRad: 200,
      minMaxRad: 200,
      minRadFactor: 0,
      iterations: 11,
      numPoints: 0,
      drawsPerFrame: 4,
      fullTurn: 0,
      minX: 0,
      maxX: 0,
      minY: displayHeight / 2 - 50,
      maxY: displayHeight / 2 + 50,
      twistAmount: 0.67 * Math.PI * 2,
      maxColorValue: 100,
      minColorValue: 20,
      lineAlpha: 0.10,
      bgColor: '#000000',
      urlColor: '#333333',
      lineWidth: 1.01,
      timer: null,
      drawCount: 0,
      colorParamArray: [],
      colorArray: [],
      xSpace: 0,
      ySpace: 0,
      lineNumber: 0,
      stepsPerSegment: 0
    };

    fractalSettings.numPoints = Math.pow(2, fractalSettings.iterations) + 1;
    fractalSettings.fullTurn = Math.PI*2*fractalSettings.numPoints/(1 + fractalSettings.numPoints);
    fractalSettings.minX = -fractalSettings.maxMaxRad;
    fractalSettings.maxX = displayWidth + fractalSettings.maxMaxRad;
    fractalSettings.stepsPerSegment = Math.floor(800/fractalSettings.numCircles);

    const startGenerator = (settings: FractalSettings) => {

      settings.drawCount = 0;
      settings.lineNumber = 0;
      settings.colorArray = setColorList(settings);

      context?.setTransform(1,0,0,1,0,0);
      context?.clearRect(0,0,displayWidth,displayHeight);
      
      settings.circles = setCircles(settings);

      if (settings.timer !== null) clearInterval(settings.timer);
      settings.timer = setInterval(() => onTimer(settings), 1000/60);
    }

    const setColorList = (settings: FractalSettings) => {

      const { maxColorValue, minColorValue, lineAlpha } = settings;
      const tempColorArray: Array<string> = [];

      const r0 = minColorValue + Math.random()*(maxColorValue - minColorValue);
      const g0 = minColorValue + Math.random()*(maxColorValue - minColorValue);
      const b0 = minColorValue + Math.random()*(maxColorValue - minColorValue);

      const r1 = minColorValue + Math.random()*(maxColorValue-minColorValue);
      const g1 = minColorValue + Math.random()*(maxColorValue-minColorValue);
      const b1 = minColorValue + Math.random()*(maxColorValue-minColorValue);

      const a = lineAlpha;

      const colorParamArray = setLinePoints(settings);

      const len = colorParamArray.length;

      for (let i = 0; i < len; i++) {
        const param = colorParamArray[i];

        const r: number = Math.floor(r0 + param*(r1 - r0));
        const g: number = Math.floor(g0 + param*(g1 - g0));
        const b: number = Math.floor(b0 + param*(b1 - b0));

        const newColor: string = `rgba(${ r },${ g }, ${ b }, ${ a })`;
        tempColorArray.push(newColor);
      }
      
      return tempColorArray;
    }

    const setCircles = (settings: FractalSettings) => {
      const { numCircles, minMaxRad, maxMaxRad, minRadFactor, minX, maxX, minY, maxY, twistAmount } = settings;
      
      const tempCircles: Array<Circle> = [];
      
      for (let i = 0; i < numCircles; i++) {
        const maxR = minMaxRad+Math.random()*(maxMaxRad-minMaxRad);
        const minR = minRadFactor*maxR;
        
        var newCircle = {
          centerX: minX + i/(numCircles-1)*(maxX - minX),
          centerY: minY + i/(numCircles-1)*(maxY - minY),
          maxRad : maxR,
          minRad : minR,
          phase : i/(numCircles-1)*twistAmount,
          pointArray : setLinePoints(settings)
          };
        tempCircles.push(newCircle);
		  }

      return tempCircles;
    }

    const setLinePoints = (settings: FractalSettings) => {
      const { iterations } = settings;

      let pointList: PointList = { first: { x:0, y:1, next: { x:1, y:1, next:null } }};
      const pointArray: Array<number> = [];
      let point: Point | null;
      let nextPoint: Point;
      let dx: number;
      let minY: number = 1;
      let maxY: number = 1;
      let newX: number;
      let newY: number;

      for (let i = 0; i < iterations; i++) {
        point = pointList.first;

        while (point.next != null) {
          nextPoint = point.next;

          dx = nextPoint.x - point.x;
          newX = 0.5*(point.x + nextPoint.x);
          newY = 0.5*(point.y + nextPoint.y);
          newY += dx*(Math.random()*2 - 1);

          let newPoint: Point = { x: newX, y: newY, next: null };

          if (newY < minY) minY = newY;
          else if (newY > maxY) maxY = newY;

          newPoint.next = nextPoint;
          point.next = newPoint;
          point = nextPoint;
        }
      }

      if (maxY !== minY) {
        const normalizeRate = 1/(maxY - minY);
        point = pointList.first;
        while (point !== null) {
          point.y = normalizeRate*(point.y - minY);
          pointArray.push(point.y);
          point = point.next;
        }
      }

      return pointArray;
    }

    const onTimer = (settings: FractalSettings) => {
      const { drawsPerFrame, lineNumber, numPoints, fullTurn, colorArray, lineWidth, circles, numCircles } = settings;
      const stepsPerSegment = Math.floor(800/numCircles);
      let iterLineNumber = lineNumber;
      const xSqueeze = 0.75;

      if (context === null || context === undefined) return;

      for (let k = 0; k < drawsPerFrame; k++) {
        const theta = iterLineNumber/(numPoints - 1)*fullTurn;

        context.globalCompositeOperation = "lighter";
        context.lineJoin = "miter";
        context.strokeStyle = colorArray[iterLineNumber];
        context.lineWidth = lineWidth;
        context.beginPath();

        let { centerX, centerY, phase } = circles[0];

        let rad = circles[0].minRad + circles[0].pointArray[iterLineNumber]*(circles[0].maxRad = circles[0].minRad);
        let x0 = centerX + xSqueeze*rad*Math.cos(theta + phase);
        let y0 = centerY + rad*Math.sin(theta + phase);
        context.moveTo(x0,y0);

        for (let i = 0; i < numCircles - 1; i++) {
          const rad0 = circles[i].minRad + circles[i].pointArray[iterLineNumber]*(circles[i].maxRad = circles[i].minRad);
          const rad1 = circles[i+1].minRad + circles[i+1].pointArray[iterLineNumber]*(circles[i+1].maxRad = circles[i+1].minRad);
          const phase0 = circles[i].phase;
          const phase1 = circles[i+1].phase;

          for (let j = 0; j < stepsPerSegment; j++) {
            const linParam = j/(stepsPerSegment - 1);
            const cosParam = 0.5 - 0.5*Math.cos(linParam*Math.PI);

            centerX = circles[i].centerX + linParam*(circles[i+1].centerX - circles[i].centerX);
            centerY = circles[i].centerY + cosParam*(circles[i+1].centerY - circles[i].centerY);

            rad = rad0 + cosParam*(rad1 - rad0);
            phase = phase0 + cosParam*(phase1 - phase0);
            x0 = centerX + xSqueeze*rad*Math.cos(theta + phase);
            y0 = centerY + rad*Math.sin(theta + phase);

            context.lineTo(x0,y0);
          }
        }

        context.stroke();
        iterLineNumber++;
        if (iterLineNumber > numPoints - 1) {
          if (settings.timer !== null) clearInterval(settings.timer);
          settings.timer = null;
          break;
        }
      }
    }

    startGenerator(fractalSettings);
  }

  return (
    <div className="fractal-folder__container">
      <canvas ref={ fractalCanvas } width="1024px" height="576px">
        Your browser does not support HTML5 canvas.
      </canvas>
    </div>
  );
};
export default FractalFolder;