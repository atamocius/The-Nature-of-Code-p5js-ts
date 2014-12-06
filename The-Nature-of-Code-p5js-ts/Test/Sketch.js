/// <reference path="../scripts/p5.d.ts" />
var Test;
(function (_Test) {
    'use strict';
    var Test = (function () {
        function Test(s) {
            this.s = s;
        }
        Test.prototype.setup = function () {
            this.s.createCanvas(640, 480);
        };
        Test.prototype.draw = function () {
            if (this.s.mouseIsPressed) {
                this.s.fill(0);
            }
            else {
                this.s.fill(255);
            }
            this.s.ellipse(this.s.mouseX, this.s.mouseY, 80, 80);
        };
        return Test;
    })();
    _Test.sketch = function (s) {
        var t;
        s.setup = function () {
            t = new Test(s);
            t.setup();
        };
        s.draw = function () {
            t.draw();
        };
    };
})(Test || (Test = {}));
var p5_Test = new p5(Test.sketch);
//# sourceMappingURL=Sketch.js.map