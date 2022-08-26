// Create a RPS game playing against the cpu, using variables, functions.
function user() {
    const prompt = require("prompt-sync")({ sigint: true});
    let sign = prompt("Choose Your weapon: rock, paper or scissors?: ");
}

let randomCpu = Math.floor(Math.random() * 2) + 1;

function cpu() {
    if (randomCpu == 1) {
        console.log('cpu: rock');   
    }  else if (randomCpu == 2) {
        console.log('cpu: paper');   
    }  else if (randomCpu == 3) {
        console.log('cpu: scissors')
    } 
}



user();
cpu();















 
