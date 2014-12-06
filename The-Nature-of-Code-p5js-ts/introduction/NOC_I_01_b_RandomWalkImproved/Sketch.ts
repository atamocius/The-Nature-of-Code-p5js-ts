///// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_01_b {
    'use strict';

    class Walker {
        private s: any;

        private x: number;
        private y: number;

        constructor(s: any) {
            this.s = s;

            this.x = this.s.width / 2;
            this.y = this.s.height / 2;
        }

        display(): void {
            this.s.stroke(0);
            this.s.point(this.x, this.y);
        }

        step(): void {
            // Yields -1, 0, or 1
            //var stepx: number = this.s.floor(this.s.random(3)) - 1;
            //var stepy: number = this.s.floor(this.s.random(3)) - 1;
            // Yields any floating point number between -1.0 and 1.0
            var stepx: number = this.s.random(-1, 1);
            var stepy: number = this.s.random(-1, 1);
            this.x += stepx;
            this.y += stepy;

            this.x = this.s.constrain(this.x, 0, this.s.width - 1);
            this.y = this.s.constrain(this.y, 0, this.s.height - 1);
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

var myp5 = new p5(NOC_I_01_b.sketch);
