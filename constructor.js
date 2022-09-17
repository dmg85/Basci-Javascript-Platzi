
// Snipet to enable the use of prompt in vs code
const prompt = require("prompt-sync")({ sigint: true});

function country(name, language, currency) {
    this.name = name;
    this.language = language;
    this.currency = currency;
} 

// Exercise copied from another student


let countries = [];

for(let i = 0; i < 1; i++) {
    let name = prompt("Insert the name of the country: ");
    let language = prompt("Insert the language of the country: ");
    let currency = prompt("Insert the country currency: ");
    countries.push(new country (name, language, currency));
}

for(let i = 0; i < countries.length; i++) {
    console.log(countries[i]); 
}


