// Old version
function newFunction(name, age, country) {
    var name = name || 'diego';
    var age = age || 32;
    var country = country || 'Col';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Diego', age = 37, country = "Col") {
    console.log(name, age, country);
}

// Two ways to call the function
// newFunction2('Alexander', '25', 'CAN');
// newFunction2();

// Concatenation
// Old way
let hello = "Ciao";
let mondo = "Mondo";
let sentence = hello + ' ' + mondo;
console.log(sentence);

let sentenceEs6 = `${hello} ${mondo}`;
console.log(sentenceEs6);
