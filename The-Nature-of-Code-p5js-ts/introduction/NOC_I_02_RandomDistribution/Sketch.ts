///// <reference path="../../scripts/p5.d.ts" />

module C_I_03 {
    'use strict';

    export var sketch = function (s: any): void {

        var randomCounts: number[];

        s.setup = () => {
            s.createCanvas(640, 240);
            randomCounts =
                [0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0];
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

var p5_C_I_03 = new p5(C_I_03.sketch);
