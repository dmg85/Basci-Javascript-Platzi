// console.log('Asynchronous exaxmple');

// setTimeout(() =>{
//     console.log('using the setTimeout method');
// }, 2000)

// console.log('stash example');

// Promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout (()=> resolve('Hello World'), 3000) 
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalized'))
    
    
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-10-16');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);


