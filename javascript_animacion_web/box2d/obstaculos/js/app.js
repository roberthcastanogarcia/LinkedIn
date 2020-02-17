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

	addEventListener('click', function(e) {
		if (Math.random() > 0.5) {
			createBall(world, e.pageX / 2, e.pageY);
		} else {
			createBox(world, e.pageX / 2, e.pageY, 10, 10, false);
		}
		
	});

	step();

}

function createWorld() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-1000, -1000);
	worldAABB.maxVertex.Set(1000, 1000);
	var gravity = new b2Vec2(0, 300);
	var doSleep = true;
	world = new b2World(worldAABB, gravity, doSleep);

	createGround(world);

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

function createBall(world, x, y) {
	var ballSd = new b2CircleDef();
	ballSd.density = 0.5;
	ballSd.radius = 20;
	ballSd.restitution = 0.5;
	ballSd.friction =1;

	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x, y);

	return world.CreateBody(ballBd);

}

function createJoint(){
	var myBall = createBall(world, 600, 150);

	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(400, 200);

	jointDef.body1 = world.GetGroundBody();
	jointDef.body2 = myBall;

	return world.CreateJoint(jointDef);

}

function createGround(world) {
	var groundSd = new b2BoxDef();
	groundSd.extents.Set(100, 270);

	var groundBd = new b2BodyDef();
	groundBd.AddShape(groundSd);

	groundBd.position.Set(400, 370);

	return world.CreateBody(groundBd);
}

function createBox(world, x, y, width, height, fixed) {
	var boxSd = new b2BoxDef();
	if (!fixed) boxSd.density = 1.0;
	boxSd.restitution = 0.0;
	boxSd.friction = 1.0;
	boxSd.extents.Set(width, height);

	var boxBd = new b2BodyDef();
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x,y);

	return world.CreateBody(boxBd);
}



function generarMundo() {
	console.log("El mundo ha sido creado");
	createBall(world, 300, 120);
	createBox(world, 400, 50, 10, 20, true);
	createBox(world, 600, 50, 50, 70, true);

	createJoint();
}



