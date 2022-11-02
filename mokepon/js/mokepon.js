//variables
const buttonPetPlayer = document.getElementById("button-pet-player");
const inputJubub = document.getElementById("jubub");
const inputLordvill = document.getElementById("lordvill");
const inputHunter = document.getElementById("hunter");
const spanPetPlayer = document.getElementById("pet-player");
const spanPetEnemy = document.getElementById("pet-enemy")
let enemy = 0;
let selectedPetPlayer = "";
let selectedPetEnemy = ""

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
	} else if (enemy === 3) {
		selectedPetEnemy = "Hunter 🐕‍🦺";
		
	}
    alert("Your enemy chose " + selectedPetEnemy)
    spanPetEnemy.innerHTML = selectedPetEnemy;
}
function selectPetPlayer() {
	if (jubub.checked) {
		selectedPetPlayer = "Jubub 🤖";
	} else if (lordvill.checked) {
		selectedPetPlayer = "Lordvill 👑";
	} else if (hunter.checked) {
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

//ejecuciones

buttonPetPlayer.addEventListener("click", selectPetPlayer);
