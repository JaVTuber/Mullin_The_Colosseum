import {summons, weapons, charachters} from "./definitions.js";

// Essential variables / information
let canva;
let player;
let enemy;
let state = "choosing";
let turn = 0;
let secCh = document.getElementById("CHOOSING");
let secF = document.getElementById("FIGHTING");
//let secR = document.getElementById();

// Functions

function tempTransition() {
    secCh.style.display = "none";
    secF.style.display = "flex";
}

// Game loop
function game() {
	secCh.style.display = "flex";
    secF.style.display = "none";

    let tempChange = document.getElementById("starter");
    tempChange.addEventListener("click", tempTransition);
}

window.addEventListener("load", game);
