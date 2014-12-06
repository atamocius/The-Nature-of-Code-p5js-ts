/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_03_b;
(function (NOC_I_03_b) {
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
            var r = this.s.random(1);
            // 50% chance to move in the direction of the mouse
            if (r < 0.5) {
                if (this.s.mouseX > this.x) {
                    this.x++;
                }
                else if (this.s.mouseX < this.x) {
                    this.x--;
                }
                if (this.s.mouseY > this.y) {
                    this.y++;
                }
                else if (this.s.mouseY < this.y) {
                    this.y--;
                }
            }
            else {
                var choice = this.s.floor(this.s.random(4));
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
            }
            this.x = this.s.constrain(this.x, 0, this.s.width - 1);
            this.y = this.s.constrain(this.y, 0, this.s.height - 1);
        };
        return Walker;
    })();
    NOC_I_03_b.sketch = function (s) {
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
})(NOC_I_03_b || (NOC_I_03_b = {}));
var myp5 = new p5(NOC_I_03_b.sketch);
//# sourceMappingURL=Sketch.js.map