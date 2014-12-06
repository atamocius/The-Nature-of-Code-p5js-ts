/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_05_a {
    'use strict';

    class Walker {
        private s: any;

        private pos: any;
        private prevPos: any;

        constructor(s: any) {
            this.s = s;

            this.pos = this.s.createVector(this.s.width / 2, this.s.height / 2);
            this.prevPos = this.s.createVector(this.s.width / 2, this.s.height / 2);
        }

        display(): void {
            this.s.stroke(0);
            this.s.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        }

        step(): void {
            this.prevPos.set(this.pos.x, this.pos.y);

            // Levy flight
            var xStep: number;
            var yStep: number;
            var r: number = this.s.random(1);

            if (r < 0.01) {
                xStep = this.s.random(-100, 100);
                yStep = this.s.random(-100, 100);
            } else {
                xStep = this.s.random(-1, 1);
                yStep = this.s.random(-1, 1);
            }

            this.pos.x += xStep;
            this.pos.y += yStep;

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

var myp5 = new p5(NOC_I_05_a.sketch);
