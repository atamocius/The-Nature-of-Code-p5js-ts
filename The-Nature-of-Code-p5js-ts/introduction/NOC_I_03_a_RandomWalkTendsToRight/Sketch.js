/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_03_a;
(function (NOC_I_03_a) {
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
            // A 40% of moving to the right!
            if (r < 0.4) {
                this.x++;
            }
            else if (r < 0.6) {
                this.x--;
            }
            else if (r < 0.8) {
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
    NOC_I_03_a.sketch = function (s) {
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
})(NOC_I_03_a || (NOC_I_03_a = {}));
var myp5 = new p5(NOC_I_03_a.sketch);
//# sourceMappingURL=Sketch.js.map