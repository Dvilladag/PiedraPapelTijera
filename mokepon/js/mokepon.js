//variables
const buttonPetPlayer = document.getElementById("button-pet-player");
const buttonFire = document.getElementById("button-fire");
const buttonWatter = document.getElementById("button-watter");
const buttonGround = document.getElementById("button-ground");
const inputJubub = document.getElementById("jubub");
const inputLordvill = document.getElementById("lordvill");
const inputHunter = document.getElementById("hunter");
const spanPetPlayer = document.getElementById("pet-player");
const spanPetEnemy = document.getElementById("pet-enemy");
let enemy = 0;
let selectedPetPlayer = "";
let selectedPetEnemy = "";
let selectedAttackPlayer = "";
let selectedAttackEnemy = "";

//functions
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function selectPetEnemy() {
	enemy = randomNumber(1, 3);
	if (enemy === 1) {
		selectedPetEnemy = "Jubub 🤖";
	} else if (enemy === 2) {
		selectedPetEnemy = "Lordvill 👑";
	} else {
		selectedPetEnemy = "Hunter 🐕‍🦺";
	}
	alert("Your enemy chose " + selectedPetEnemy);
	spanPetEnemy.innerHTML = selectedPetEnemy;
}
function selectPetPlayer() {
	if (inputJubub.checked) {
		selectedPetPlayer = "Jubub 🤖";
	} else if (inputLordvill.checked) {
		selectedPetPlayer = "Lordvill 👑";
	} else {
		selectedPetPlayer = "Hunter 🐕‍🦺";
	}

	if (selectedPetPlayer === "") {
		alert("You don't selected anything, please select a Pet.");
	} else {
		alert("You selected " + selectedPetPlayer);
		spanPetPlayer.innerHTML = selectedPetPlayer;
		selectPetEnemy();
	}
}
function selectAttackEnemy() {
	const number = randomNumber(1, 3);
	if (number === 1) {
		selectedAttackEnemy = "Fire 🔥";
	} else if (number === 2) {
		selectedAttackEnemy = "Watter 💧";
	} else {
		selectedAttackEnemy = "Ground 🌿";
	}
	alert("Enemy selected " + selectedAttackEnemy);
}
function setAttack(attack) {
	alert("You selected " + attack);
	selectedAttackPlayer = attack;
}
function clickFireButton() {
	setAttack("Fire🔥");
	selectAttackEnemy();
}
function clickWatterButton() {
	setAttack("Watter 💧");
	selectAttackEnemy();
}
function clickGroundButton() {
	setAttack("Ground 🌿");
	selectAttackEnemy();
}

//ejecuciones

buttonPetPlayer.addEventListener("click", selectPetPlayer);
buttonFire.addEventListener("click", clickFireButton);
buttonWatter.addEventListener("click", clickWatterButton);
buttonGround.addEventListener("click", clickGroundButton);

