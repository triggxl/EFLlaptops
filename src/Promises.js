// Promises help you reason about the order in which asynchronous code is executed
//command: node {fileLocation}

//*Not Working* Returning promise object to resolve when setTimeout triggers
/*
A has started
Promise { <pending> }
*/
//Adding the following code to call the function and print the return value.
const p2 = doTask('A');
console.log(p2);

function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration =   Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
}

//Attaching Handlers
// const p1 = new Promise((resolve, reject) => {
//   console.log('Running the asynchronous code here');
//   const duration =   Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log('About to fail');
//     reject('Error 42: Life has no meaning'); // resolve/fail(with value) 
//   }, duration);
// });

// p1.then(()=> {
//   console.log('The promise completed successfully');
// }).catch((err)=> {
//   console.log('The promise has failed.');
//   console.log(err);
// });

//resolve 
//When a Promise is rejected it looks for a catch handler and ignores the then()
// const p1 = new Promise((resolve, reject) => {
//   console.log('Running the asynchronous code here');
//   const duration =   Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log('About to pass');
//     resolve('Stay Positive!'); // resolve(with parameter)/fail 
//   }, duration);
// });

// p1.then(()=> {
//   console.log('The promise completed successfully');
// })



//Adding a promise

// const p1 = new Promise((resolve, reject) => {
//   console.log('Running the asynchronous code here');
//   const duration =   Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log('About to resolve');
//     resolve(42); // resolve/fail with a message
//   }, duration);
// });

//"Rat race" simulate running several tasks asynchronously ('cool gist')
// function doTask(name) {
//   console.log(`${name} has started`);
//   const duration =   Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     console.log(`${name} has ended after ${duration} milliseconds`);
//   }, duration);
// }

// doTask('A');
// doTask('B');
// doTask('C');
// doTask('D');
// doTask('E');
// doTask('F');

/*
Math.random() generates a random floating point number between 0 and 1. 
To get an integer between 0 and say 5000 we can multiply by 5000 and round down the result using Math.floor()
*/
// console.log('The code has started.');
// const duration = Math.floor(Math.random() * 5000);
// setTimeout(() => {
//   console.log(`Hey! I waited ${duration} milliseconds.`);
// }, duration);
// console.log('This is the last statement in the file.');

// console.log('The code has started.'); //synchronous
// setTimeout(() => {
//   console.log('Hey! I waited 3 seconds.'); //asynchronous
// }, 3000);
// console.log('This is the last statement in the file.'); //synchronous

// setTimeout(()=> {
//   console.log('Hey! I waited 3 seconds.');
// }, 3000);

// p1.then(value => {
//   console.log('The promise completed successfully');
//   console.log(value)
// }).catch(err => { // notice the err parameter here
//   console.log('The promise has failed with the following message:');
//   console.log(err);
// });

