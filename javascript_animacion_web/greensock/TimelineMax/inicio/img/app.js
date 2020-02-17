var animacion;
var logo;
var btnReiniciar;
var btnAnimar;
var btnPausar;
var btnReversa;
var btnReproducir;

window.onload = function() {
	btnAnimar = document.getElementById("btnAnimar");
	btnReiniciar = document.getElementById("btnReiniciar");
	btnPausar = document.getElementById("btnPausar");
	btnReversa = document.getElementById("btnReversa");
	btnReproducir = document.getElementById("btnReproducir");
	logo = document.getElementById("logo");
	btnAnimar.onclick = animar;

}

function animar() {
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	
	animacion = new TimelineMax({
		delay: 2, 
		paused: false, 
		repeat: 0, 
		repeatDelay: 1, 
		yoyo: true, 
		onComplete: animacionCompleta
		//onCompleteParams: []
	});

	animacion.to(logo, 2, {
		left:600
	})
	.staggerTo([img1, img2, img3], 2, {
		left: 600
	}, 0.5);

	btnReiniciar.onclick = function() {
		animacion.restart();
	}

	btnPausar.onclick = function() {
		animacion.pause();
	}

	btnReversa.onclick = function() {
		animacion.reverse();
	}

	btnReproducir.onclick = function() {
		//animacion.play("animacion1");
		animacion.play("animacion1");
	}
}

function animacionCompleta() {
	console.log("Animacion terminada.");
}