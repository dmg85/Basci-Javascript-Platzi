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

newFunction2();