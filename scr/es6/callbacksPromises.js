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
    
    

