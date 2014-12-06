/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_05_a;
(function (NOC_I_05_a) {
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
            // Levy flight
            var xStep;
            var yStep;
            var r = this.s.random(1);
            if (r < 0.01) {
                xStep = this.s.random(-100, 100);
                yStep = this.s.random(-100, 100);
            }
            else {
                xStep = this.s.random(-1, 1);
                yStep = this.s.random(-1, 1);
            }
            this.pos.x += xStep;
            this.pos.y += yStep;
            this.pos.x = this.s.constrain(this.pos.x, 0, this.s.width - 1);
            this.pos.y = this.s.constrain(this.pos.y, 0, this.s.height - 1);
        };
        return Walker;
    })();
    NOC_I_05_a.sketch = function (s) {
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
})(NOC_I_05_a || (NOC_I_05_a = {}));
var myp5 = new p5(NOC_I_05_a.sketch);
//# sourceMappingURL=Sketch.js.map