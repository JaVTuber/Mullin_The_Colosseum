/////////////////////////
// DEFINITIONS.JS FILE //
/////////////////////////
//import * as attack from "./attacks.js";

// CLASSES
class Charachter {
	constructor(name, ability, desc, hp, recPMana, maxPMana, maxMMana, spells, bag, turn) {
		this.name = name;
		this.ability = ability;
		this.desc = desc;
		this.hp = hp;
		this.recPMana = recPMana;
		this.maxPMana = maxPMana;
		this.curPMana = this.maxPmana;
		this.maxMMana = maxMMana;
		this.spells = spells;
		this.bag = bag;
		this.turn = turn;
	}
}

class Summon {
	constructor(name, desc, hp, atkB, defB, atks, pCost, mCost) {
		this.name = name;
		this.desc = desc;
		this.hp = hp;
		this.atkB = atkB;
		this.defB = defB;
		this.atks = atks;
		this.pCost = pCost;
		this.mCost = mCost;
	}
}

class Weapon extends Summon {
	constructor(name, desc, ability, abilityDesc, hp, atkB, defB, atks, pCost, mCost) {
		super(name, desc, hp, atkB, defB, atks, pCost);
		this.ability = ability;
		this.abilityDesc = abilityDesc;
		this.mCost = mCost;
	}
}

// SUMMON DEFINITIONS
const ifrit = new Summon("Ifrit", "", 600, 27, 0.33, [], 7, 3);
const shiva = new Summon("Shiva", "", 550, 24, 0.35, [], 6, 3);
const alexander = new Summon("Alexander", "", 5000, 120, 0.85, [], 16, 1);
const odin = new Summon("Odín", "", 770, 78, 0.45, [], 7, 2);
const tonsberry = new Summon("Tonsberry", "", 200, 150, 0.99, [], 1, 1);
const hades = new Summon("Hades", "", 660, 90, 0.45, [], 6, 2);
const leviatan = new Summon("Leviatán", "", 910, 75, 0.66, [], 14, 5);
const titan = new Summon("Titán", "", 890, 110, 0.97, [], 12, 4);
const tifon = new Summon("Tifón", "", 390, 33, 0.2, [], 6, 2);
const chocomog = new Summon("Chocomog", "", 150, 16, 0.5, [], 8, 5);
const bahamut = new Summon("Bahamut", "", 1000, 65, 0.47, [], 15, 6);
const neoBahamut = new Summon("Neo Bahamut", "", 1500, 80, 0.5, [], 18, 8);
const bahamutZero = new Summon("Bahamut Zero", "", 2000, 120, 0.6, [], 20, 10);
const rahamut = new Summon("Rahamut", "", 800, 30, 0.25, [], 9, 4);
const kuja = new Summon("Kuja", "", 760, 100, 0.15, [], 9, 6);
const fenix = new Summon("Fénix", "", 900, 60, 0.10, [], 18, 4);
const lcdlmr = new Summon("Los Caballeros de La Mesa Redonda", "", 1300, 130, 0.72, [], 13, 7);
const anima = new Summon("Ánima", "", 400, 25, 0.05, [], 6, 3);
const jades = new Summon("Jades", "", 850, 64, 0.23, [], 10, 4);
const cactus = new Summon("Cactus", "", 600, 30, 0.07, [], 5, 3);
const meteoro = new Summon("Meteoro", "", 1030, 90, 0.7, [], 17, 2);
const malvoro = new Summon("Malvoro", "", 700, 70, 0.08, [], 7, 3);

// WEAPON DEFINITIONS
const zafiro = new Weapon("Zafiro", "", undefined, "", 1.1, 1800, 0.75, [], 6);
const ultimate = new Weapon("Ultimate", "", undefined, "", 2.5, 3000, 0.6, [], 10);
const diamante = new Weapon("Diamante", "", undefined, "", 1.8, 1500, 0.8, [], 7);
const rubi = new Weapon("Rubí", "", undefined, "", 1, 1000, 0.85, [], 6);
const esmeralda = new Weapon("Esmeralda", "", undefined, "", 1.5, 2000, 0.55, [], 8);
const jade = new Weapon("Jade", "", undefined, "", 0.7, 500, 0.5, [], 5);
const omega = new Weapon("Omega", "", undefined, "", 2, 2500, 0.9, [], 9);
const caos = new Weapon("Caos", "", undefined, "", 1, 1, 1, [], 1);

// CHARACHTERS DEFINITIONS
const mulin = new Charachter("Mulín Lilith", undefined, "", 10000, 8, 60, 25, [], [], undefined);
const samanta = new Charachter("Mulín Samanta", undefined, "", 9000, 7, 55, 24, [], [], undefined);
const sabrina = new Charachter("Mulín Sabrina", undefined, "", 8500, 6, 50, 23, [], [], undefined);
const fiona = new Charachter("Mulín Fiona", undefined, "", 6000, 4, 40, 20, [], [], undefined);
const priscilla = new Charachter("Mulín Priscilla", undefined, "", 7500, 5, 44, 22, [], [], undefined);
const wanda = new Charachter("Mulín Wanda", undefined, "", 7500, 5, 46, 21, [], [], undefined);

// LISTS
// export const summons = [ifrit, shiva, alexander, odin, tonsberry, hades, leviatan, titan, tifon, chocomog, bahamut, neoBahamut, rahamut, kuja, fenix, lcdlmr, anima, jades, cactus, meteoro, malvoro];
// export const weapons = [zafiro, ultimate, diamante, rubi, esmeralda, jade, omega, caos];
// export const charachters = [mulin, samanta, sabrina, fiona, priscilla, wanda];
const summons = [ifrit, shiva, alexander, odin, tonsberry, hades, leviatan, titan, tifon, chocomog, bahamut, neoBahamut, rahamut, kuja, fenix, lcdlmr, anima, jades, cactus, meteoro, malvoro];
const weapons = [zafiro, ultimate, diamante, rubi, esmeralda, jade, omega, caos];
const charachters = [mulin, samanta, sabrina, fiona, priscilla, wanda];


////////////////////
// SCRIPT.JS FILE //
////////////////////
// import {summons, weapons, charachters} from "./definitions.js";

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
function chooseP1 (person) { // Chooses a charachter for its respective player
	for (i = 0; i <= charachters.length; i++) {
		if (charachters[i] == person.id) {
			player = charachters[i];
		}
	}
}

function chooseP2 (person) { // Chooses a charachter for its respective player
	for (i = 0; i <= charachters.length; i++) {
		if (charachters[i] == person.id) {
			enemy = charachters[i];
		}
	}
}

function startGame () {
	let coin = Math.floor(Math.random() * 2) + 1;
		
	if (coin === 1) {
		//player.turn = true;
		//enemy.turn = false;
		state = "fighting";
		turn++;
	} else if (coin === 2) {
		//player.turn = false;
		//enemy.turn = true;
		state = "fighting";
		turn++;
	} else {
		window.location.reload();
	}
	
	secCh.style.display = "none";
	secF.style.display = "flex";
	//secR.style.display = "none";
}

// Game loop
function game() {
	if (state == "choosing") {
		console.log("STARTED!");
		// Canvas visuals
		
		// GUI visuals
		secCh.style.display = "flex";
		secF.style.display = "none";
		//secR.style.display = "none";
		
		// Functions
		let starter = document.getElementById("starter");
		
		starter.addEventListener("click", startGame);
		
		/*for (i = 0; i <= 6; i++) {
			p1[i].addEventListener("click", chooseP1(p1[i]));
			console.log(p1[i]);
			p2[i].addEventListener("click", console.log(p2[i].id));
		}*/
		
	} else if (state == "fighting") {
		console.log("CHANGED!");
		// Essential comprobations
		if (player.hp === 0 || enemy.hp === 0) state = "results";
		if (player.turn === false && enemy.turn === true) {
			
		} else if ((player.turn == enemy.turn) || 
			player.turn == (null || undefined) || 
			enemy.turn == (null || undefined)) {
			window.location.reload();
		}
		
		// Canvas visuals
		
		// GUI visuals
				
		// Functions
	} else if (state == "results") {
		// Canvas visuals
		
		// GUI visuals
		
		// Functions
	} else {
		window.location.reload();
	}
}

window.addEventListener("load", game);
