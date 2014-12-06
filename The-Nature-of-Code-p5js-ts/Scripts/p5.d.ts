
//declare function p5(sketch: any): void;

/*
 * Environment
 */
declare var width: number;
declare var height: number;

/*
 * Input
 */
/* Mouse */
declare var mouseX: number;
declare var mouseY: number;
declare var mouseIsPressed: boolean;

/*
 * Math
 */
/* Calculation */
declare function floor(n: number): number;
/* Random */
declare function random(): number;
declare function random(max: number): number;
declare function random(min: number, max: number): number;

/*
 * Rendering
 */
declare function createCanvas(width: number, height: number): void;

/*
 * Shape
 */
/* 2D Primitives */
declare function ellipse(x: number, y: number, width: number, height: number): void;
declare function point(x: number, y: number): void;
declare function rect(x: number, y: number, width: number, height: number): void;

/*
 * Color
 */
/* Setting */
declare function background(v1: number, v2?: number, v3?: number, a?: number): void;
declare function background(v1: number[], v2?: number, v3?: number, a?: number): void;
declare function background(v1: number, v2?: number[], v3?: number, a?: number): void;
declare function background(v1: number, v2?: number, v3?: number[], a?: number): void;
declare function background(v1: number, v2?: number, v3?: number, a?: number[]): void;
declare function background(v1: number[], v2?: number[], v3?: number, a?: number): void;
declare function background(v1: number, v2?: number[], v3?: number[], a?: number): void;
declare function background(v1: number, v2?: number, v3?: number[], a?: number[]): void;
declare function background(v1: number[], v2?: number[], v3?: number[], a?: number): void;
declare function background(v1: number, v2?: number[], v3?: number[], a?: number[]): void;
declare function background(v1: number[], v2?: number[], v3?: number[], a?: number[]): void;
declare function fill(v1: number, v2?: number, v3?: number, a?: number): void;
declare function fill(v1: number[], v2?: number, v3?: number, a?: number): void;
declare function fill(v1: number, v2?: number[], v3?: number, a?: number): void;
declare function fill(v1: number, v2?: number, v3?: number[], a?: number): void;
declare function fill(v1: number, v2?: number, v3?: number, a?: number[]): void;
declare function fill(v1: number[], v2?: number[], v3?: number, a?: number): void;
declare function fill(v1: number, v2?: number[], v3?: number[], a?: number): void;
declare function fill(v1: number, v2?: number, v3?: number[], a?: number[]): void;
declare function fill(v1: number[], v2?: number[], v3?: number[], a?: number): void;
declare function fill(v1: number, v2?: number[], v3?: number[], a?: number[]): void;
declare function fill(v1: number[], v2?: number[], v3?: number[], a?: number[]): void;
declare function stroke(v1: number, v2?: number, v3?: number, a?: number): void;
declare function stroke(v1: number[], v2?: number, v3?: number, a?: number): void;
declare function stroke(v1: number, v2?: number[], v3?: number, a?: number): void;
declare function stroke(v1: number, v2?: number, v3?: number[], a?: number): void;
declare function stroke(v1: number, v2?: number, v3?: number, a?: number[]): void;
declare function stroke(v1: number[], v2?: number[], v3?: number, a?: number): void;
declare function stroke(v1: number, v2?: number[], v3?: number[], a?: number): void;
declare function stroke(v1: number, v2?: number, v3?: number[], a?: number[]): void;
declare function stroke(v1: number[], v2?: number[], v3?: number[], a?: number): void;
declare function stroke(v1: number, v2?: number[], v3?: number[], a?: number[]): void;
declare function stroke(v1: number[], v2?: number[], v3?: number[], a?: number[]): void;
