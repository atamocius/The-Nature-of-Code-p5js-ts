/// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_06_c {
    'use strict';

    export var sketch = function (s: any): void {

        var xOff: number = 0;
        var xIncrement: number = 0.01;

        s.setup = () => {
            s.createCanvas(640, 360);
            s.background(0);
            s.noStroke();
        };

        s.draw = () => {
            s.fill(0, 10);
            s.rect(0, 0, s.width, s.height);

            //var n: number = s.random(0,width);  // Try this line instead of noise

            // Get a noise value based on xoff and scale it according to the window's width
            var n: number = s.noise(xOff);

            var x: number = s.map(n, 0, 1, 0, s.width);

            // With each cycle, increment xoff
            xOff += xIncrement;

            // Draw the ellipse at the value produced by perlin noise
            s.fill(200);
            s.ellipse(x, s.height / 2, 64, 64);

            s.println(n);
        };
    };

}

var myp5 = new p5(NOC_I_06_c.sketch);
