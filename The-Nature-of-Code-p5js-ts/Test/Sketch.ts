/// <reference path="../scripts/p5.d.ts" />

//function setup(): void {
//    createCanvas(640, 480);
//}

//function draw(): void {
//    if (mouseIsPressed) {
//        fill(0);
//    } else {
//        fill(255);
//    }
//    ellipse(mouseX, mouseY, 80, 80);
//}

module Test {
    class Test {
        setup(): void {
            createCanvas(640, 480);
        }

        draw(): void {
            if (mouseIsPressed) {
                fill(0);
            } else {
                fill(255);
            }
            ellipse(mouseX, mouseY, 80, 80);
        }
    }

    //var t: Test = new Test();

    //function setup(): void {
    //    t.setup();
    //}

    //function draw(): void {
    //    t.draw();
    //}

    export class Sketch {
        t: Test = new Test();

        setup(): void {
            this.t.setup();
        }

        draw(): void {
            this.t.draw();
        }
    }
}