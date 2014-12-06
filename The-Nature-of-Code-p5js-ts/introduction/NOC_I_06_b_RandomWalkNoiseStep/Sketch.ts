/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_b {
    'use strict';

    class Walker {
        private s: any;

        private pos: any;
        private prevPos: any;
        private nOff: number; // noise offset

        constructor(s: any) {
            this.s = s;

            this.pos = this.s.createVector(this.s.width / 2, this.s.height / 2);
            this.prevPos = this.s.createVector(this.s.width / 2, this.s.height / 2);
            this.nOff = this.s.random(10000);
        }

        display(): void {
            this.s.stroke(0);
            this.s.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        }

        step(): void {
            this.prevPos.set(this.pos.x, this.pos.y);

            var maxStepSize: number = 20;
            var stepSize: number = this.s.map(this.s.noise(this.nOff), 0, 1, 0, maxStepSize);
            this.nOff += 0.01;

            // 0, 1, 2, or 3
            var choice: number = this.s.floor(this.s.random(4));

            if (choice === 0) {
                this.pos.x += stepSize;
            } else if (choice === 1) {
                this.pos.x -= stepSize;
            } else if (choice === 2) {
                this.pos.y += stepSize;
            } else {
                this.pos.y -= stepSize;
            }

            this.pos.x = this.s.constrain(this.pos.x, 0, this.s.width - 1);
            this.pos.y = this.s.constrain(this.pos.y, 0, this.s.height - 1);
        }
    }

    export var sketch = function (s: any): void {

        var walker: Walker;

        s.setup = () => {
            s.createCanvas(640, 360);
            walker = new Walker(s);
            s.background(255);
        };

        s.draw = () => {
            walker.step();
            walker.display();
        };
    };

}

var myp5 = new p5(NOC_I_06_b.sketch);
