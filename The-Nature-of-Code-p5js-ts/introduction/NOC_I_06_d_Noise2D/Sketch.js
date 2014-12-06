/// <reference path="../../scripts/p5.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_06_d;
(function (NOC_I_06_d) {
    'use strict';
    NOC_I_06_d.sketch = function (s) {
        var xOff = 0;
        var yOff = 0;
        var xIncrement = 0.01;
        var yIncrement = 0.01;
        s.setup = function () {
            s.createCanvas(640, 360);
            s.background(0);
            s.noStroke();
            s.loadPixels();
            // Start xoff at 0.
            xOff = 0;
            for (var x = 0; x < s.width; x++) {
                // For every xoff, start yoff at 0.
                yOff = 0;
                for (var y = 0; y < s.height; y++) {
                    // Use xoff and yoff for noise().
                    //var bright: number = s.random(0, 255);
                    var bright = s.map(s.noise(xOff, yOff), 0, 1, 0, 255);
                    // Use x and y for pixel location.
                    var pIndex = 4 * (y * s.width + x); // pixel index offset
                    s.pixels[pIndex] = bright; // red
                    s.pixels[pIndex + 1] = bright; // green
                    s.pixels[pIndex + 2] = bright; // blue
                    s.pixels[pIndex + 3] = 255; // alpha
                    // Increment yoff.
                    yOff += yIncrement;
                }
                // Increment xoff.
                xOff += xIncrement;
            }
            s.updatePixels();
        };
        s.draw = function () {
            return;
        };
    };
})(NOC_I_06_d || (NOC_I_06_d = {}));
var myp5 = new p5(NOC_I_06_d.sketch);
//# sourceMappingURL=Sketch.js.map