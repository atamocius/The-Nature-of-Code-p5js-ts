/// <reference path="../scripts/p5.d.ts" />

module Test {
    'use strict';

    class Test {
        private s: any;

        constructor(s: any) {
            this.s = s;
        }

        setup(): void {
            this.s.createCanvas(640, 480);
        }

        draw(): void {
            if (this.s.mouseIsPressed) {
                this.s.fill(0);
            } else {
                this.s.fill(255);
            }
            this.s.ellipse(this.s.mouseX, this.s.mouseY, 80, 80);
        }
    }

    export var sketch = function (s: any): void {

        var t: Test;

        s.setup = () => {
            t = new Test(s);
            t.setup();
        };

        s.draw = () => {
            t.draw();
        };
    };
}

var p5_Test = new p5(Test.sketch);
