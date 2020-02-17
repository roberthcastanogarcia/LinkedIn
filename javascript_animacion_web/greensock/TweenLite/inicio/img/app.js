var animacion;
var logo;
var btnReiniciar;
var btnAnimar;

window.onload = function() {
	btnAnimar = document.getElementById("btnAnimar");
	btnReiniciar = document.getElementById("btnReiniciar");
	logo = document.getElementById("logo");
	btnAnimar.onclick = animar;

}

function animar() {

	animacion = TweenLite.to(logo, 3, {
		left: 120,
		backgroundColor: "black",
		borderRadius: 50,
		delay: 0,
		ease: Elastic.easeOut
	});

	btnReiniciar.onclick = function() {
		animacion.restart();
	}
}