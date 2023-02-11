"use strict";

const path = require("path");
const readline = require("readline");

const config = require("./reload_config.json");
const replay = require(path.join(__dirname, config.replay));

let scanner = readline.createInterface({
	input: process.stdin,
	output: undefined,
	terminal: false
});

scanner.on("line", (line) => {
	send_next();
});

let i = 0;

function send_next() {
	let output;
	if (replay.actions) {												// Local format replay.
		output = replay.actions[i++][`player_${config.team}`];
	} else {															// Kaggle format replay.
		output = replay.steps[++i][config.team].action;					// NOTE: actions are out by 1 on Kaggle, so do ++i not i++
	}
	console.log(JSON.stringify(output));
}
