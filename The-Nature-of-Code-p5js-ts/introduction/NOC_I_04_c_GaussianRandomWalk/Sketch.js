/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_04_c;
(function (NOC_I_04_c) {
    'use strict';
    var Walker = (function () {
        function Walker(s) {
            this.s = s;
            this.pos = this.s.createVector(this.s.width / 2, this.s.height / 2);
            this.prevPos = this.s.createVector(this.s.width / 2, this.s.height / 2);
        }
        Walker.prototype.display = function () {
            this.s.stroke(0);
            this.s.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        };
        Walker.prototype.step = function () {
            this.prevPos.set(this.pos.x, this.pos.y);
            var sd = 2;
            var mean = 7;
            var stepSize = this.s.randomGaussian();
            stepSize = (stepSize * sd) + mean;
            // 0, 1, 2, or 3
            var choice = this.s.floor(this.s.random(4));
            if (choice === 0) {
                this.pos.x += stepSize;
            }
            else if (choice === 1) {
                this.pos.x -= stepSize;
            }
            else if (choice === 2) {
                this.pos.y += stepSize;
            }
            else {
                this.pos.y -= stepSize;
            }
            this.pos.x = this.s.constrain(this.pos.x, 0, this.s.width - 1);
            this.pos.y = this.s.constrain(this.pos.y, 0, this.s.height - 1);
        };
        return Walker;
    })();
    NOC_I_04_c.sketch = function (s) {
        var walker;
        s.setup = function () {
            s.createCanvas(640, 360);
            walker = new Walker(s);
            s.background(255);
        };
        s.draw = function () {
            walker.step();
            walker.display();
        };
    };
})(NOC_I_04_c || (NOC_I_04_c = {}));
var myp5 = new p5(NOC_I_04_c.sketch);
//# sourceMappingURL=Sketch.js.map