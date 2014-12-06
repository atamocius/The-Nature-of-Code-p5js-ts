/// <reference path="../../scripts/p5.d.ts" />
var C_I_01;
(function (C_I_01) {
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
    C_I_01.sketch = function (s) {
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
})(C_I_01 || (C_I_01 = {}));
var p5_C_I_01 = new p5(C_I_01.sketch);
//# sourceMappingURL=Sketch.js.map