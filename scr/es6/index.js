// Old version
// function newFunction(name, age, country) {
//     var name = name || 'diego';
//     var age = age || 32;
//     var country = country || 'Col';
//     console.log(name, age, country);
// }

// // es6
// function newFunction2(name = 'Diego', age = 37, country = "Col") {
//     console.log(name, age, country);
// }

// Two ways to call the function
// newFunction2('Alexander', '25', 'CAN');
// newFunction2();

// Concatenation
// Old way
// let hello = "Ciao";
// let mondo = "Mondo";
// let sentence = hello + ' ' + mondo;
// console.log(sentence);

// let sentenceEs6 = `${hello} ${mondo}`;
// console.log(sentenceEs6);

// Multiline
// Old ways
// let netText = ".NET is a free and open-source, managed computer software framework \n"
// + "for Windows, Linux, and macOS operating systems."

// let netText2 = `It is a cross-platform successor to .NET Framework.
// The project is primarily developed by Microsoft employees by way of the .NET Foundation.
// `;

// console.log(netText);
// console.log(netText2);

// Destructuring

// let user = {
//     'firstName': 'Diego',
//     'age': 37,
//     'country': 'Col'
// }

// console.log(user.firstName, user.age, user.country);

// let { firstName} = user;
// console.log(firstName);

// Propagation
// let team1 = ['Diego', 'Alexander', 'Mariana'];
// let team2 = ['Elena', 'Marta', 'Cata'];

// let classRoom = ['Monin', ...team1, ...team2];

// console.log(classRoom);

// Let Scope

// var works outisde of this block of code
{
    var globalScope = 'This is global var Scope Baby!';
}
// while let can only be accesed if I add a console log inside the function
{
    let letScope = 'This is global Let Scope!';
    console.log(letScope);
    
}

// console.log(globalScope);
console.log(globalScope);

// const

const a = 'b';
// You can't reasing a value to a const variable.
a = 'a';
console.log(a);



