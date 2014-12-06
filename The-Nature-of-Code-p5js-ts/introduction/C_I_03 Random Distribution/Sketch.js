/// <reference path="../../scripts/p5.d.ts" />
var C_I_03;
(function (C_I_03) {
    var Sketch = (function () {
        function Sketch() {
        }
        Sketch.prototype.setup = function () {
            createCanvas(640, 240);
            this.randomCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        };
        Sketch.prototype.draw = function () {
            background(255);
            var index = floor(random(this.randomCounts.length));
            this.randomCounts[index]++;
            stroke(0);
            fill(175);
            var w = width / this.randomCounts.length;
            for (var x = 0; x < this.randomCounts.length; x++) {
                rect(x * w, height - this.randomCounts[x], w - 1, this.randomCounts[x]);
            }
        };
        return Sketch;
    })();
    C_I_03.Sketch = Sketch;
})(C_I_03 || (C_I_03 = {}));
//# sourceMappingURL=Sketch.js.map