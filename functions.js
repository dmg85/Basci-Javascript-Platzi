// Declaration

 /*function myFunction() {
    return 3;
 }

// Expression

var myFunction = function(a,b) {
    return a + b;
}*/
 //Function with templalte string (Backticks)
/*function greetingStudents(students) {
    console.log(`Hi ${students}`);
}
greetingStudents("John");*/

// Function with return statement
/*function adding2Par(a,b) {
    let result = a + b;
    let print = result;
    console.log(print);
}

adding2Par(99,2);*/

// Scope

/*let nameUser = "Diego"

function funScope () {
    let lastName = " Medina";
    return nameUser + "" + lastName;
}

console.log(funScope());*/

// Hoisting (is when variables and functions are processed before any code gets executed)
/*var myName = "Diego";

hey();

function hey() {
 console.log("Hi " + myName);
}

var myName = "Diego"*/

// if statement

/*let age = 18;

if(age === 23) {
    console.log('First time voter');
} else if (age > 18) {
    console.log('You can vote again');
} else {
    console.log("Still can/'t vote yet");
}*/

//Ternary Operator

// let = num = 1;

// let res = num === 1 ? "I/'m number one" : "I/'m not number one";

// console.log(res);

//switch
// let num = 1;

// switch (num){
//     case 1:
//         console.log("I am one");
//         break;
//     case 10:
//         console.log('I am ten');
//         break;
//     case 100:
//         console.log('I am One Hundred');
//         break;
//     default:
//         console.log('I am none of the above');
               
// }

// rock, paper scissors with switch

let weapons = ['rock', 'paper', 'scissors'];

// let ran2 = weapons(Math.floor(Math.random() * 2)) + 1;

// switch(weapons) {
//     case 'rock':
//         console.log('user weapon: rock');
//         break;
//     case 'paper':
//         console.log('user weapon: paper');
//         break;
//     case 'rock':
//         console.log('user weapon: rock');
//         break;
//     default:
//         console.log('Choose a valid weapon! ');
          
// }

// console.log("User choose: " + weapons[0]);

// Loops

let currencies = ["Dolar", "Euro", "Bitcoin", "Ether"]

// My first arrow function made entirely by miself =)
let namingCurrencies = (currencies) => console.log(`Currency ${currencies}`);

// for(let i = 0; i < currencies.length; i++){
//     namingCurrencies(currencies[i])
// }

//for example
for(let currency of currencies){
    namingCurrencies(currency);
}








 
