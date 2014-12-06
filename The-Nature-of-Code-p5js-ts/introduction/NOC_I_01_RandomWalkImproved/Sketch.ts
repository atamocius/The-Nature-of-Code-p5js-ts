///// <reference path="../../scripts/p5.d.ts" />

module C_I_02 {
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

var p5_C_I_02 = new p5(C_I_02.sketch);
