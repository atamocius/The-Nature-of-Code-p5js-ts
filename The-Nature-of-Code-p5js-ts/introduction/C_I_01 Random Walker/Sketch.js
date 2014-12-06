/// <reference path="../../scripts/p5.d.ts" />
var C_I_01;
(function (C_I_01) {
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
            var choice = floor(random(4));
            if (choice === 0) {
                this.x++;
            }
            else if (choice === 1) {
                this.x--;
            }
            else if (choice === 2) {
                this.y++;
            }
            else {
                this.y--;
            }
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
    C_I_01.Sketch = Sketch;
})(C_I_01 || (C_I_01 = {}));
//# sourceMappingURL=Sketch.js.map