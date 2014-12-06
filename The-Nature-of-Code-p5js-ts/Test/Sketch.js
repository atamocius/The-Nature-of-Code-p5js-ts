/// <reference path="../scripts/p5.d.ts" />
//function setup(): void {
//    createCanvas(640, 480);
//}
//function draw(): void {
//    if (mouseIsPressed) {
//        fill(0);
//    } else {
//        fill(255);
//    }
//    ellipse(mouseX, mouseY, 80, 80);
//}
var Test;
(function (_Test) {
    var Test = (function () {
        function Test() {
        }
        Test.prototype.setup = function () {
            createCanvas(640, 480);
        };
        Test.prototype.draw = function () {
            if (mouseIsPressed) {
                fill(0);
            }
            else {
                fill(255);
            }
            ellipse(mouseX, mouseY, 80, 80);
        };
        return Test;
    })();
    //var t: Test = new Test();
    //function setup(): void {
    //    t.setup();
    //}
    //function draw(): void {
    //    t.draw();
    //}
    var Sketch = (function () {
        function Sketch() {
            this.t = new Test();
        }
        Sketch.prototype.setup = function () {
            this.t.setup();
        };
        Sketch.prototype.draw = function () {
            this.t.draw();
        };
        return Sketch;
    })();
    _Test.Sketch = Sketch;
})(Test || (Test = {}));
//# sourceMappingURL=Sketch.js.map