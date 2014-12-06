/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_04_a;
(function (NOC_I_04_a) {
    'use strict';
    NOC_I_04_a.sketch = function (s) {
        s.setup = function () {
            s.createCanvas(640, 360);
            s.background(255);
        };
        s.draw = function () {
            // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
            var xloc = s.randomGaussian();
            var sd = 60; // Define a standard deviation
            var mean = s.width / 2; // Define a mean value (middle of the screen along the x-axis)
            xloc = (xloc * sd) + mean; // Scale the gaussian random number by standard deviation and mean
            s.fill(0, 10);
            s.noStroke();
            s.ellipse(xloc, s.height / 2, 16, 16); // Draw an ellipse at our "normal" random position
        };
    };
})(NOC_I_04_a || (NOC_I_04_a = {}));
var myp5 = new p5(NOC_I_04_a.sketch);
//# sourceMappingURL=Sketch.js.map