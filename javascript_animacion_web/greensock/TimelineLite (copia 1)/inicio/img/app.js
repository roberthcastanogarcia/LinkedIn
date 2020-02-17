var animacion;
var logo;
var btnReiniciar;
var btnAnimar;
var btnAnimarImg;

window.onload = function() {
	btnAnimar = document.getElementById("btnAnimar");
	btnReiniciar = document.getElementById("btnReiniciar");
	btnAnimarImg = document.getElementById("btnAnimarImg");
	logo = document.getElementById("logo");
	btnAnimar.onclick = animar;

}

function animar() {
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	
	animacion = new TimelineLite();

	animacion.to(logo, 2, {left:600})
	.staggerTo([img1, img2, img3], 2, {left: 600}, 0.5);

	btnReiniciar.onclick = function() {
		animacion.restart();
	}

	btnPausar.onclick = function() {
		animacion.pause();
	}

	btnReversa.onclick = function() {
		animacion.reverse();
	}

	btnReiniciar.onclick = function() {
		animacion.play();
	}
}