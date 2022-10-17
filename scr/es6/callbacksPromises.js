// console.log('Asynchronous exaxmple');

// setTimeout(() =>{
//     console.log('using the setTimeout method');
// }, 2000)

// console.log('stash example');

// Promise.finally
// const helloWorld = () => {
//     return new Promise((resolve, reject) => {
//         (true)
//         ? setTimeout (()=> resolve('Hello World'), 3000) 
//         : reject(new Error('Test Error'))
//     });
// };

// helloWorld()
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Finalized'))
    
    
// const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// const match = regexData.exec('2020-10-16');
// const year = match[1]
// const month = match[2]
// const day = match[3]

// console.log(year, month, day);

// es10

// let arr = [1,2,3, [1,2,3, [1,2,3]]];

// console.log(arr.flat());


// let arr2 = [1,2,3,4,5];

// console.log(arr2.flatMap(value => [value, value * 2]));

//** trimStart removes whites spaces at the beginning of the array
//** trimEnd removes whites spaces at the end of the array
// let hello = '   hello world';
// console.log(hello);
// console.log(hello.trimStart());

// let helloEnd = 'hello world   ';

// console.log(helloEnd.trimEnd());

// // entries
// let entries = [["name", "Diego"], ["age", 37]];
// console.log(Object.fromEntries(entries));

let mySym = `desc example`;
let symbol = pollo(mySym);
console.log(symbol.description);


















