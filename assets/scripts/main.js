import {summons, weapons, charachters} from "./definitions.js";

// Essential variables / information
const visuals = document.getElementById("canvas");
const choosingSection = document.getElementById("CHOOSING");
const fightingSection = document.getElementById("FIGHTING");
const optionsP1 = document.getElementById("optionsP1");
const optionsP2 = document.getElementById("optionsP2");
const starter = document.getElementById("starter");
const weaponsSubsection = document.getElementById("weapons");
const summonsSubsection = document.getElementById("summons");
const spellsSubsection = document.getElementById("spells");
const theBagSubsection = document.getElementById("theBag");
const resultsSection = document.getElementById("RESULTS");
let canvas = visuals.getContext("2d");
let inputs = document.getElementsByTagName("input");
let ch1Chosen = false;
let ch2Chosen = false;
let weaponIndex = 0;
let summonIndex = 0;
let spellsIndex = [0, 1, 2];
let theBagIndex = [0, 1, 2];
let turns = 0;
let p1;
let p2;

// Functions

function drawOptions(container) {
    let row;

    charachters.forEach((ch, i) => {
        if (i % 3 === 0) {
            row = document.createElement("tr");
            container.appendChild(row);
        }

        let cell = document.createElement("td");
        cell.innerHTML = `<input type="radio" name=${"charachter" + container.className[6]} class=${container.className} id=${ch.id + container.className[6]}><label for=${ch.id + container.className[6]} class=${container.className}>${ch.icon}</label>`;
        row.appendChild(cell);
    });

    
    row = document.createElement("tr");
    row.innerHTML = `<td></td><td class="player1" id="random">Rand</td><td></td>`;
    container.appendChild(row);
}

function chooseCharachter() {
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].checked) {
            if (inputs[i].className === "player1") {
                charachters.forEach((ch1) => {
                    if (String(ch1.id) + "1" === inputs[i].id) p1 = ch1;
                    ch1Chosen = true;
                });
            } else if (inputs[i].className === "player2") {
                charachters.forEach((ch2) => {
                    if (String(ch2.id) + "2" === inputs[i].id) p2 = ch2;
                    ch2Chosen = true;
                });
            } else {
                window.location.reload();
            }
        }
    }
    if (ch1Chosen && ch2Chosen) {
        choosingSection.style.display = "none";
        fightingSection.style.display = "flex";
    }
}

// Game loop
function startGame() {
	choosingSection.style.display = "flex";
    fightingSection.style.display = "none";

    drawOptions(optionsP1);
    drawOptions(optionsP2);

    starter.addEventListener("click", chooseCharachter);
}

window.addEventListener("load", startGame);
