/// <reference path="../scripts/p5.d.ts" />

function setup(): void {
    createCanvas(640, 480);
}

function draw(): void {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}