/// <reference path="../../scripts/p5.d.ts" />

module C_I_03 {
    export class Sketch {

        randomCounts: number[];

        setup(): void {
            createCanvas(640, 240);
            this.randomCounts =
                [0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 0, 0];
        }

        draw(): void {
            background(255);

            var index: number = floor(random(this.randomCounts.length));
            this.randomCounts[index]++;

            stroke(0);
            fill(175);

            var w: number = width / this.randomCounts.length;

            for (var x: number = 0; x < this.randomCounts.length; x++) {
                rect(x * w, height - this.randomCounts[x], w - 1, this.randomCounts[x]);
            }
        }
    }
}