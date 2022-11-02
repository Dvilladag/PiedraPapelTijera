function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0;

const jugadorEscoge = () => {
	if (jugador == 1) {
		alert("Escogiste 🥌");
	} else if (jugador == 2) {
		alert("Escogiste 🧻");
	} else if (jugador == 3) {
		alert("Escogiste ✂");
	} else {
		alert("Re tronco");
	}
};
const pcEscoge = () => {
	if (pc == 1) {
		alert("pc elige 🥌");
	} else if (pc == 2) {
		alert("pc elige 🧻");
	} else if (pc == 3) {
		alert("pc elige ✂");
	} else {
		alert("Re tronco");
	}
};
const todosEscogen = () => {
	jugador = prompt("Escoge: 1 piedra, 2 papel o 3 tijera");
	jugadorEscoge();
	if (jugador == "1" || jugador == "2" || jugador == "3") {
		pcEscoge();
	} else {
		todosEscogen();
	}
};
const combate = () => {
	if (pc == jugador) {
		alert("Empate, vuelvan a jugar.");
		empates += 1;
		todosEscogen();
	} else if (jugador == 1 && pc == 2) {
		alert("Perdiste");
		perdidas += 1;
	} else if (jugador == 3 && pc == 1) {
		alert("Perdiste");
		perdidas = perdidas + 1;
	} else if (jugador == 2 && pc == 3) {
		alert("Perdiste");
		perdidas = perdidas + 1;
	} else {
		alert("Ganaste");
		triunfos = triunfos + 1;
	}
};
while (triunfos < 3 && perdidas < 3) {
	pc = randomNumber(1, 3);
	// 1 piedra, 2 papel, 3 tijera
	todosEscogen();
	// COMBATE
	combate();
}
alert(
	"Ganaste " +
		triunfos +
		" veces, perdiste " +
		perdidas +
		" veces y empataste " +
		empates +
		" veces."
);
