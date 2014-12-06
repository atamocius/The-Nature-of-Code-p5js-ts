/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_03_a {
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

            // A 40% of moving to the right!
            if (r < 0.4) {
                this.x++;
            } else if (r < 0.6) { // 20% probability of moving left
                this.x--;
            } else if (r < 0.8) { // 20% probability of moving up
                this.y++;
            } else {  // 20% probability of moving down
                this.y--;
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

var myp5 = new p5(NOC_I_03_a.sketch);
