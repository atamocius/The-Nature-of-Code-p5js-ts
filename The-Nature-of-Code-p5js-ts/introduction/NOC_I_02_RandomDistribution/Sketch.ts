///// <reference path="../../scripts/p5.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

module NOC_I_02 {
    'use strict';

    export var sketch = function (s: any): void {

        // An array to keep track of how often random numbers are picked
        var randomCounts: number[];

        s.setup = () => {
            s.createCanvas(640, 240);

            randomCounts = new Array<number>(20);
            // Initialize array values to 0
            for (var i: number = 0; i < randomCounts.length; i++) {
                randomCounts[i] = 0;
            }
        };

        s.draw = () => {
            s.background(255);

            var index: number = s.floor(s.random(randomCounts.length));
            randomCounts[index]++;

            s.stroke(0);
            s.fill(175);

            var w: number = s.width / randomCounts.length;

            for (var x: number = 0; x < randomCounts.length; x++) {
                s.rect(x * w, s.height - randomCounts[x], w - 1, randomCounts[x]);
            }
        };
    };

}

var myp5 = new p5(NOC_I_02.sketch);
