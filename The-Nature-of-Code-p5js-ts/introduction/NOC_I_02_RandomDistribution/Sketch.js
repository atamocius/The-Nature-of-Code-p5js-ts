///// <reference path="../../scripts/p5.d.ts" />
var C_I_03;
(function (C_I_03) {
    'use strict';
    C_I_03.sketch = function (s) {
        var randomCounts;
        s.setup = function () {
            s.createCanvas(640, 240);
            randomCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        };
        s.draw = function () {
            s.background(255);
            var index = s.floor(s.random(randomCounts.length));
            randomCounts[index]++;
            s.stroke(0);
            s.fill(175);
            var w = s.width / randomCounts.length;
            for (var x = 0; x < randomCounts.length; x++) {
                s.rect(x * w, s.height - randomCounts[x], w - 1, randomCounts[x]);
            }
        };
    };
})(C_I_03 || (C_I_03 = {}));
var p5_C_I_03 = new p5(C_I_03.sketch);
//# sourceMappingURL=Sketch.js.map