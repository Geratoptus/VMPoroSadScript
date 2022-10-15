const fs = require('fs');
const prompt = require("prompt-sync")();
let arg = process.argv;
let memory = new Array();
let scriptName = prompt("Введите название скрипта (Fibonachi, GCD, Factorial): ");
let commands = fs.readFileSync(scriptName + '.pss');
commands = commands.toString();
memory = commands.split(/[ ,\n]/);
let programmLen = memory.length;
let ip = 0;
while (memory[ip] != 'quit'){
	switch (memory[ip]){
		case 'input':
			memory[+memory[ip + 1] + programmLen] = parseFloat(prompt("Введите значение: ")); 
			ip += 2;
			break;
		case 'copy':
			memory[+memory[ip + 2] + programmLen] = +memory[+memory[ip + 1] + programmLen];
			ip += 3;
			break;
		case 'isequal':
			memory[+memory[ip + 3] + programmLen] = memory[+memory[ip + 1] + programmLen] == memory[+memory[ip + 2] + programmLen];
			ip += 4;
			break;
		case 'isless':
			memory[+memory[ip + 3] + programmLen] = +memory[+memory[ip + 1] + programmLen] < +memory[+memory[ip + 2] + programmLen];
			ip += 4;
			break;
		case 'sum':
			memory[+memory[ip + 3] + programmLen] = +memory[+memory[ip + 1] + programmLen] + +memory[+memory[ip + 2] + programmLen];
			ip += 4;
			break;
		case 'sub':
			memory[+memory[ip + 3] + programmLen] = +memory[+memory[ip + 1] + programmLen] - +memory[+memory[ip + 2] + programmLen];
			ip += 4;
			break;
		case 'goif':
			if (memory[+memory[ip + 1] + programmLen]) 
				ip = +memory[ip + 2].substring(1);
			else 
				ip += 3;
			break;
		case 'goto':
			ip = +memory[ip + 1].substring(1);
			break;
		case 'output':
			console.log(memory[+memory[ip + 1] + programmLen]);
			ip += 2;
			break;
		case 'increment':
			memory[+memory[ip + 1] + programmLen] = +memory[+memory[ip + 1] + programmLen] + 1;
			ip += 2;
			break;
		case 'set':
			memory[+memory[ip + 2] + programmLen] = memory[ip + 1].substring(1);
			ip += 3;
			break;
		case 'mult':
			memory[+memory[ip + 3] + programmLen] = +memory[+memory[ip + 1] + programmLen] * +memory[+memory[ip + 2] + programmLen];
			ip += 4;
			break;
	}	
}
