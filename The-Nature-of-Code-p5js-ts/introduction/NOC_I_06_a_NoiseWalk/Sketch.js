/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_06_a;
(function (NOC_I_06_a) {
    'use strict';
    var Walker = (function () {
        function Walker(s) {
            this.s = s;
            this.pos = this.s.createVector(this.s.width / 2, this.s.height / 2);
            this.nOff = this.s.createVector(this.s.random(0), this.s.random(10000));
        }
        Walker.prototype.display = function () {
            this.s.strokeWeight(2);
            this.s.fill(51);
            this.s.stroke(0);
            this.s.ellipse(this.pos.x, this.pos.y, 48, 48);
        };
        Walker.prototype.step = function () {
            this.pos.x = this.s.map(this.s.noise(this.nOff.x), 0, 1, 0, this.s.width);
            this.pos.y = this.s.map(this.s.noise(this.nOff.y), 0, 1, 0, this.s.height);
            this.nOff.add(0.01, 0.01, 0);
        };
        return Walker;
    })();
    NOC_I_06_a.sketch = function (s) {
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
})(NOC_I_06_a || (NOC_I_06_a = {}));
var myp5 = new p5(NOC_I_06_a.sketch);
//# sourceMappingURL=Sketch.js.map