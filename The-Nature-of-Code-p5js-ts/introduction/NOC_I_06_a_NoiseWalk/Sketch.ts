/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_a {
    'use strict';

    class Walker {
        private s: any;

        private pos: any;
        private nOff: any; // noise offset

        constructor(s: any) {
            this.s = s;

            this.pos = this.s.createVector(this.s.width / 2, this.s.height / 2);
            this.nOff = this.s.createVector(this.s.random(0), this.s.random(10000));
        }

        display(): void {
            this.s.strokeWeight(2);
            this.s.fill(51);
            this.s.stroke(0);
            this.s.ellipse(this.pos.x, this.pos.y, 48, 48);
        }

        step(): void {
            this.pos.x = this.s.map(this.s.noise(this.nOff.x), 0, 1, 0, this.s.width);
            this.pos.y = this.s.map(this.s.noise(this.nOff.y), 0, 1, 0, this.s.height);
            this.nOff.add(0.01, 0.01, 0);
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

var myp5 = new p5(NOC_I_06_a.sketch);
