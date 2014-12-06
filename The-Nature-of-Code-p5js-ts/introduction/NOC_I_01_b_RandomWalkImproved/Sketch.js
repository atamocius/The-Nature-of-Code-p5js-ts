///// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_01_b;
(function (NOC_I_01_b) {
    'use strict';
    var Walker = (function () {
        function Walker(s) {
            this.s = s;
            this.x = this.s.width / 2;
            this.y = this.s.height / 2;
        }
        Walker.prototype.display = function () {
            this.s.stroke(0);
            this.s.point(this.x, this.y);
        };
        Walker.prototype.step = function () {
            // Yields -1, 0, or 1
            //var stepx: number = this.s.floor(this.s.random(3)) - 1;
            //var stepy: number = this.s.floor(this.s.random(3)) - 1;
            // Yields any floating point number between -1.0 and 1.0
            var stepx = this.s.random(-1, 1);
            var stepy = this.s.random(-1, 1);
            this.x += stepx;
            this.y += stepy;
            this.x = this.s.constrain(this.x, 0, this.s.width - 1);
            this.y = this.s.constrain(this.y, 0, this.s.height - 1);
        };
        return Walker;
    })();
    NOC_I_01_b.sketch = function (s) {
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
})(NOC_I_01_b || (NOC_I_01_b = {}));
var myp5 = new p5(NOC_I_01_b.sketch);
//# sourceMappingURL=Sketch.js.map