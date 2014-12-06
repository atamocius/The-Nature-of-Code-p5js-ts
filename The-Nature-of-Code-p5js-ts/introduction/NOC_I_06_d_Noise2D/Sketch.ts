/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_d {
    'use strict';

    export var sketch = function (s: any): void {

        var xOff: number = 0;
        var yOff: number = 0;
        var xIncrement: number = 0.01;
        var yIncrement: number = 0.01;

        s.setup = () => {
            s.createCanvas(640, 360);
            s.background(0);
            s.noStroke();

            s.loadPixels();
            // Start xoff at 0.
            xOff = 0;
            for (var x: number = 0; x < s.width; x++) {
                // For every xoff, start yoff at 0.
                yOff = 0;
                for (var y: number = 0; y < s.height; y++) {
                    // Use xoff and yoff for noise().
                    //var bright: number = s.random(0, 255);
                    var bright: number = s.map(s.noise(xOff, yOff), 0, 1, 0, 255);
                    // Use x and y for pixel location.
                    var pIndex: number = 4 * (y * s.width + x); // pixel index offset
                    s.pixels[pIndex] = bright;      // red
                    s.pixels[pIndex + 1] = bright;  // green
                    s.pixels[pIndex + 2] = bright;  // blue
                    s.pixels[pIndex + 3] = 255;     // alpha

                    // Increment yoff.
                    yOff += yIncrement;
                }
                // Increment xoff.
                xOff += xIncrement;
            }
            s.updatePixels();
        };

        s.draw = () => {
            return;
        };
    };

}

var myp5 = new p5(NOC_I_06_d.sketch);
