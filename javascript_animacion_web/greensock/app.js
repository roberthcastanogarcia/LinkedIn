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

	TweenLite.to(logo, 2, {left: 200});

}