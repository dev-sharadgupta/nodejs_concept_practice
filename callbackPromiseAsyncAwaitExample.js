function first() {
    console.log("First Function");
}

function second() {
    console.log("Second Function");
}

function third(){
    console.log("Third Function");
}

first();
second();
third();


// Async function
// function first() {
//     console.log("First Function");
// }

// function second() {
//     setTimeout(() => {
//         console.log("Second Function");
//     },0);
// }

// function third(){
//     console.log("Third Function");
// }

// first();
// second();
// third();


// Callback funtion usage
// function first(){
//     console.log("First Function");
// }

// function second (callback) {
//     setTimeout(() => {
//         console.log("Second Function ");

//         // Execute the Callback()
//         callback();
//     },0)
// }
// function third(){
//     console.log("Third Function");
// }

// first();
// second(third);

// function callbackHell() {
//     setTimeout(() => {
//         console.log("First Function");
//         setTimeout(() => {
//             console.log("Second Function");
//             setTimeout(() => {
//                 console.log("Third Function");
//             },500);
//         },2000);
//     },1000);
// }

// callbackHell();

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log("Fetched user");
//         callback("User");
//     }, 1000);
// }

// function getPosts(user, callback) {
//     setTimeout(() => {
//         console.log("Fetched posts");
//         callback("Posts");
//     }, 1000);
// }

// function getComments(posts, callback) {
//     setTimeout(() => {
//         console.log("Fetched comments");
//         callback("Comments");
//     }, 1000);
// }

// Callback hell
// getUser(1, (user) => {
//     getPosts(user, (posts) => {
//         getComments(posts, (comments) => {
//             console.log(comments);
//         });
//     });
// });


// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("First Function");
//             resolve("Users");
//         }, 1000);
//     })
// }

// function getPosts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetched posts");
//             resolve("Post");
//         }, 1000);
//     })
// }

// function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetched comments");
//             resolve("Comments");
//         }, 1000);
//     })
// }

// // Prmoises
// getUser(1)
//     .then(getPosts)
//     .then(getComments)
//     .then(console.log)
//     .catch(console.error);


// function first() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("First Function");
//             resolve();
//         }, 1000);
//     });
// }

// function second() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Second Function");
//             resolve();
//         }, 2000);
//     });
// }

// function third() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Third Function");
//             resolve();
//         }, 500);
//     });
// }

// first()
//     .then(second)
//     .then(third);



// function first() {
//     console.log("First Function");
// }

// function second() {
//     console.log("Second Function");
// }

// function third() {
//     console.log("Third Function");
// }

// // Async/Await
// async function run() {
//     try {
//         await first();
//         await second();
//         await third();
//     } catch (err) {
//         console.log(err);
//     }
// }

// run();


// function getUser() {
//     console.log("First Function");
// }

// function getPosts() {
//     console.log("Fetched posts");
// }

// function getComments() {
//     console.log("Fetched comments");
// }

// // Async/Await
// async function getDetails() {
//     try {
//         const user = await getUser();
//         const post = await getPosts();
//         const comment = await getComments();
//         console.log(user);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getDetails();

// async function test() {
//     return "Hello";
// }

// test().then(console.log);   //  Output:  Hello

/* An async function always returns a Promise, even if there is no await inside.
   So this code is equivalent to:
   function test() {
     return Promise.resolve("Hello");
   }
*/

// async function test(){
//     console.log("A");

//     await Promise.resolve();
//     console.log("B");
// }

// test();
// console.log("C");

/* Output:
A
C
B

When JavaScript encounters await:
The function pauses
The remaining code is placed in the microtask queue

 */