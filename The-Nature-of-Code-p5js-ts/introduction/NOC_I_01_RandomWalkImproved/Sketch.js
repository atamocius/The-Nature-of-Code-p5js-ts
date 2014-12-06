///// <reference path="../../scripts/p5.d.ts" />
var C_I_02;
(function (C_I_02) {
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
            var stepx = this.s.random(-1, 1);
            var stepy = this.s.random(-1, 1);
            this.x += stepx;
            this.y += stepy;
            this.x = this.s.constrain(this.x, 0, this.s.width - 1);
            this.y = this.s.constrain(this.y, 0, this.s.height - 1);
        };
        return Walker;
    })();
    C_I_02.sketch = function (s) {
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
})(C_I_02 || (C_I_02 = {}));
var p5_C_I_02 = new p5(C_I_02.sketch);
//# sourceMappingURL=Sketch.js.map