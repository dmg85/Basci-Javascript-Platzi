console.log('Asynchronous exaxmple');

setTimeout(() =>{
    console.log('using the setTimeout method');
}, 2000)

console.log('stash example');

// Cherry add
function greeting(name) {
    alert(`Hello, ${name}`);
}

function proUserInput(callback) {
    const name = console.log('input replace');
    callback(name);
}

proUserInput(greeting);