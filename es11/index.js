// get element & addEventListener examples
// const button = document.getElementById("btn");

// button.addEventListener("click", async function () {
//     const module = await import("./file.js");
//     module.hello();
// });


// working with large Int
// const aBigNumber = 9007199254740991n;
// const bigNum2 = BigInt(9007199254740991);

// console.log(aBigNumber);
// console.log(bigNum2);


// Promise.allSettled
// const promise1 = new Promise((resolve, reject) => reject("reject"));
// const promise2 = new Promise((resolve, reject) => resolve("resolve"));
// const promise3 = new Promise((resolve, reject) => reject("resolve 1"));

// Promise.allSettled([promise1, promise2, promise3])
//     .then(response => console.log(response));

// console.log(globalThis);

// optional chaining
const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}

