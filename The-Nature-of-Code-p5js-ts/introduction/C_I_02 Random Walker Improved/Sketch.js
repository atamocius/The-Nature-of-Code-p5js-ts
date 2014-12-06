/// <reference path="../../scripts/p5.d.ts" />
var C_I_02;
(function (C_I_02) {
    var Walker = (function () {
        function Walker() {
            this.x = width / 2;
            this.y = height / 2;
        }
        Walker.prototype.display = function () {
            stroke(0);
            point(this.x, this.y);
        };
        Walker.prototype.step = function () {
            var stepx = random(-1, 1);
            var stepy = random(-1, 1);
            this.x += stepx;
            this.y += stepy;
        };
        return Walker;
    })();
    var Sketch = (function () {
        function Sketch() {
        }
        Sketch.prototype.setup = function () {
            createCanvas(640, 360);
            this.walker = new Walker();
            background(255);
        };
        Sketch.prototype.draw = function () {
            this.walker.step();
            this.walker.display();
        };
        return Sketch;
    })();
    C_I_02.Sketch = Sketch;
})(C_I_02 || (C_I_02 = {}));
//# sourceMappingURL=Sketch.js.map