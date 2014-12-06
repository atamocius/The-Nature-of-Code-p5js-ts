///// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_02;
(function (NOC_I_02) {
    'use strict';
    NOC_I_02.sketch = function (s) {
        // An array to keep track of how often random numbers are picked
        var randomCounts;
        s.setup = function () {
            s.createCanvas(640, 240);
            randomCounts = new Array(20);
            for (var i = 0; i < randomCounts.length; i++) {
                randomCounts[i] = 0;
            }
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
})(NOC_I_02 || (NOC_I_02 = {}));
var myp5 = new p5(NOC_I_02.sketch);
//# sourceMappingURL=Sketch.js.map