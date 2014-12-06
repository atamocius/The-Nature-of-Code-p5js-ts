/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_04_a {
    'use strict';

    export var sketch = function (s: any): void {

        s.setup = () => {
            s.createCanvas(640, 360);
            s.background(255);
        };

        s.draw = () => {
            // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
            var xloc: number = s.randomGaussian();

            var sd: number = 60;                    // Define a standard deviation
            var mean: number = s.width / 2;         // Define a mean value (middle of the screen along the x-axis)
            xloc = (xloc * sd) + mean;              // Scale the gaussian random number by standard deviation and mean

            s.fill(0, 10);
            s.noStroke();
            s.ellipse(xloc, s.height / 2, 16, 16);  // Draw an ellipse at our "normal" random position
        };
    };

}

var myp5 = new p5(NOC_I_04_a.sketch);
