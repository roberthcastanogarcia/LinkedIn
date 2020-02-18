var x = 200;
var y = 200;
var img;

function setup() {
	createCanvas(800, 500);
	stroke("#666666");
	fill("#4FBDF2");
	img = loadImage("https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg");
}

function draw() {
	clear();
	background("#4AF2A1");
	// ellipse(x, y, 100, 100);
	// rect(50, 50, 75, 100);

	ellipse(x, y, 80, 80);
	rect(50, 50, 75, 100);

	triangle(230, 275, 258, 220, 286, 275);
	image(img, 200, 100);

	x++;
	y++;
}