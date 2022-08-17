// Create a RPS game playing against the cpu, using variables, functions.

rock = 1;
paper = 2;
scissors = 3;

function user() {
    const prompt = require("prompt-sync")({ sigint: true});
    let sign = prompt("Choose Your weapon: rock paper or scissors?: ");
}

let randomCpu = Math.floor(Math.random() * 3) + 1;

function cpu() {
    if (randomCpu == 1) {
        console.log('rock');   
    }  else if (randomCpu == 2) {
        console.log('paper');   
    }  else if (randomCpu == 3) {
        console.log('scissors')
    } 
}

function result(user, cpu) {
    if(user == rock && cpu == paper) {
       return console.log('cpu wins!');
    } else if (user == rock && cpu == scissors) {
        return console.log('user wins!');
    } else if (user == rock && cpu == rock) {
        return console.log("It\'s a Draw, Play Again! ");
    } else if (user == paper && cpu == rock) {
        return console.log('user wins!');
    } else if (user == paper && cpu == scissors) {    
        return console.log('cpu wins!');
    } else if (user == paper && cpu == paper) {    
        return console.log("It\'s a Draw, Play Again! ");
    } else if (user == scissors && cpu == rock) {
        return console.log('cpu wins!');
    } else if (user == scissors && cpu == paper) {    
        return console.log('user wins!');
    } else if (user == scissors && cpu == scissors) {    
        return console.log("It\'s a Draw, Play Again! ");
    } 
}



user();
cpu();
result(paper);











 
