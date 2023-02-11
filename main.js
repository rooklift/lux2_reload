"use strict";

const path = require("path");
const readline = require("readline");

const config = require("./reload_config.json");
const replay = require(path.join(__dirname, config.replay));

// ------------------------------------------------------------------------------------------------

let scanner = readline.createInterface({
	input: process.stdin,
	output: undefined,
	terminal: false
});

scanner.on("line", (line) => {
	send_next();
});

// ------------------------------------------------------------------------------------------------

let i = 0;

function send_next() {
	if (replay.actions) {			// Local format replay.
		let output = replay.actions[i++][`player_${config.team}`];
		console.log(JSON.stringify(output));
	}
}
