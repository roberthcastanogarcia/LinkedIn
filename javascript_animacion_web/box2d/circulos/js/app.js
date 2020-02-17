var world;
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;

window.onload = function() {

	world = createWorld();
	ctx = $('canvas').getContext('2d');
	var myCanvas = $('canvas');
	canvasWidth = parseInt(myCanvas.width);
	canvasHeight = parseInt(myCanvas.height);
	canvasTop = parseInt(myCanvas.style.top);
	canvasLeft = parseInt(myCanvas.style.left);

	generarMundo();

	step();

}

function createWorld() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-1000, -1000);
	worldAABB.maxVertex.Set(1000, 1000);
	var gravity = new b2Vec2(0, 300);
	var doSleep = true;
	world = new b2World(worldAABB, gravity, doSleep);
	return world;
}

function step(cnt) {
	var stepping = false;
	var timeStep = 1.0 / 60;
	var iteration = 1;
	world.Step(timeStep, iteration);

	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawWorld(world, ctx);
	setTimeout('step(' + (cnt || 0) + ')', 10);
}


function generarMundo() {
	console.log("El mundo ha sido creado");
}