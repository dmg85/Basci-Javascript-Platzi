// Create a RPS game playing against the cpu, using variables, functions.

rock = 1;
paper = 2;
scissors = 3;

let randomCpu = Math.floor(Math.random() * 3) + 1;

function cpu() {
    if (randomCpu == 1) {
        console.log('Cpu Choose rock');   
    }  else if (randomCpu == 2) {
        console.log('Cpu choose paper');   
    }  else if (randomCpu == 3) {
        console.log('Cpu choose scissors')
    } 
}
 
cpu();


// function user() {
//     const prompt = require("prompt-sync")({ sigint: true});
//     let sign = prompt("Choose Your weapon: rock paper or scrissors");
// } if (sign === rock &&) {
//     console.log
// }








 
