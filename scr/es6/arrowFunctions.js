// Object properties
// let name = 'Diego';
// let age = 32;
// obj = {name: name, age: age };

// // es6
// obj2 = { name, age };
// console.log(obj);

// Arrow functions "Has a reduced sintax"
const names = [
    { name: 'DiegoAM', age: 37},
    { name: 'elena', age: 20}
]
// let listOfNames = names.map(function (item) {
//     console.log(item.name); 
// }) 
// Arrow version
// let listOfNames2 = names.map(item => console.log(item.name));
//  // or 
//  const listOfNames3 = (name, age, country) => {
//     ...
//  }

 // also
//  const square = num => num * num;
//  console.log(square(5));
 
 // Promises

//  const newProm1 = () => {
//     return new Promise ((resolve, reject) => {
//         if (false) {
//             resolve('Up & running');
//         } else {
//             reject('error!! ')
//         }
//     });
//  }

//  newProm1()
//     .then(response => console.log(response))
//     .then(() => console.log('hola'))
//     .catch(error => console.log(error))

const usersList = [
    { name: 'Bot1', lang: 'Cobol'},
    { name: 'ChatBot', lang: 'C#'},
    { name: 'NoobSaibot', lang: 'Java'},
    { name: 'Cyrax', lang: 'Python'},
]

//let countName = usersList.map(item => console.log(item.lang.toUpperCase()));

let countLang = usersList.filter(usersList => usersList.lang.length > 4);

console.log(countLang);

