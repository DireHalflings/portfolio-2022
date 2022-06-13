export type Settings = {
  minDist: number,
  maxDist: number,
  initialWidth: number,
  maxLines: number,
  initialLines: number,
  dirs: Array<Array<number>>,
  speed: number,
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: number,
  timeSinceLast: number
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

export type AboutItem = {
    date: { start: string, end: string },
    title: string,
    location: string,
    bullets: Array<string>
  }