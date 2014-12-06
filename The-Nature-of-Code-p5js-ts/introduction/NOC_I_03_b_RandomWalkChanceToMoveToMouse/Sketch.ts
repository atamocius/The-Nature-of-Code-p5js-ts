/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_03_b {
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
            var r: number = this.s.random(1);

            // 50% chance to move in the direction of the mouse
            if (r < 0.5) {
                if (this.s.mouseX > this.x) {
                    this.x++;
                } else if (this.s.mouseX < this.x) {
                    this.x--;
                }

                if (this.s.mouseY > this.y) {
                    this.y++;
                } else if (this.s.mouseY < this.y) {
                    this.y--;
                }
            } else {
                var choice: number = this.s.floor(this.s.random(4));

                if (choice === 0) {
                    this.x++;
                } else if (choice === 1) {
                    this.x--;
                } else if (choice === 2) {
                    this.y++;
                } else {
                    this.y--;
                }
            }

            this.x = this.s.constrain(this.x, 0, this.s.width - 1);
            this.y = this.s.constrain(this.y, 0, this.s.height - 1);
        }
    }

    export var sketch = function(s: any): void {

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

var myp5 = new p5(NOC_I_03_b.sketch);
