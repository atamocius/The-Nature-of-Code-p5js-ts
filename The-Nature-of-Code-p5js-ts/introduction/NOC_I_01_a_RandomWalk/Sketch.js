/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_01_a;
(function (NOC_I_01_a) {
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
            // 0, 1, 2, or 3
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
            this.x = this.s.constrain(this.x, 0, this.s.width - 1);
            this.y = this.s.constrain(this.y, 0, this.s.height - 1);
        };
        return Walker;
    })();
    NOC_I_01_a.sketch = function (s) {
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
})(NOC_I_01_a || (NOC_I_01_a = {}));
var myp5 = new p5(NOC_I_01_a.sketch);
//# sourceMappingURL=Sketch.js.map