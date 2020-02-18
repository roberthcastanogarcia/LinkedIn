var x = 100;

function setup() {
	createCanvas(800, 500);
}

function draw() {
	clear();
	ellipse(x, 250, 100, 100);
	x++;
}