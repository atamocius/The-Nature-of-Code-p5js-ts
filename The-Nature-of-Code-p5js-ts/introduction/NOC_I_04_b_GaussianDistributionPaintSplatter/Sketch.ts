/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_04_b {
    'use strict';

    export var sketch = function (s: any): void {

        s.setup = () => {
            s.createCanvas(640, 360);
            s.background(255);
        };

        s.draw = () => {
            var sd: number = 60;                // Define a standard deviation
            var xMean: number = s.width / 2;    // Define a mean value (middle of the screen along the x-axis)
            var yMean: number = s.height / 2;   // Define a mean value (middle of the screen along the y-axis)

            var xloc: number = s.randomGaussian();
            var yloc: number = s.randomGaussian();

            var colorSd: number = 120;          // lower the value, the closer the random color is to the mean color
            var colorMean: number = 255;        // 100 means more purple than blue, 0 means vice versa
            var c: number = s.randomGaussian();

            // Scale the gaussian random number by standard deviation and mean
            xloc = (xloc * sd) + xMean;
            yloc = (yloc * sd) + yMean;
            c = (c * colorSd) + colorMean;

            s.fill(c, 0, 255, 127);
            s.noStroke();

            s.ellipse(xloc, yloc, 16, 16);  // Draw an ellipse at our "normal" random position
        };
    };

}

var myp5 = new p5(NOC_I_04_b.sketch);
