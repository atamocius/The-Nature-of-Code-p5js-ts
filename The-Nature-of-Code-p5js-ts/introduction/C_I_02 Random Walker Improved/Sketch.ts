/// <reference path="../../scripts/p5.d.ts" />

module C_I_02 {
    class Walker {
        private x: number;
        private y: number;

        constructor() {
            this.x = width / 2;
            this.y = height / 2;
        }

        display(): void {
            stroke(0);
            point(this.x, this.y);
        }

        step(): void {
            var stepx: number = random(-1, 1);
            var stepy: number = random(-1, 1);
            this.x += stepx;
            this.y += stepy;
        }
    }

    export class Sketch {
        walker: Walker;

        setup(): void {
            createCanvas(640, 360);
            this.walker = new Walker();
            background(255);
        }

        draw(): void {
            this.walker.step();
            this.walker.display();
        }
    }
}