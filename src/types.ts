export type FractalSettings = {
  numCircles: number,
  maxMaxRad: number,
  minMaxRad: number,
  minRadFactor: number,
  iterations: number,
  numPoints: number,
  drawsPerFrame: number,
  fullTurn: number,
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  twistAmount: number,
  stepsPerSegment: number,
  maxColorValue: number,
  minColorValue: number,
  lineAlpha: number,
  bgColor: string,
  urlColor: string,
  lineWidth: number,
  circles: Array<Circle>,
  timer:  ReturnType<typeof setTimeout> | null,
  drawCount: number,
  colorParamArray: Array<string>,
  colorArray: Array<string>,
  lineNumber: number,
  xSpace: number,
  ySpace: number
};

export type Circle = {
  centerX: number,
  centerY: number,
  maxRad: number,
  minRad: number,
  phase: number,
  pointArray: Array<number>
};

export type PointList = {
  first: Point
}

export type Point = {
  x: number,
  y: number,
  next: Point | null
};

export type Line = {
  x: number,
  y: number,
  vx: number,
  vy: number,
  width: number,
  dist: number,
  parent?: Line,
  dead: boolean
};

export type Project = {
  name: string,
  poster: string,
  animation: string,
  description: string,
  github: string,
  live: string,
  badges: Array<string>
};

export type Badge = {
  text: string,
  logo: string
};