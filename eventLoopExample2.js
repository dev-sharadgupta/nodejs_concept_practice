console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

setImmediate(() => {
    console.log("C");
});

Promise.resolve().then(() => {
    console.log("D");
})

process.nextTick(() => console.log("E"));

console.log("F");

// it can starve the event loop
// function repeat() {
//     process.nextTick(repeat);
// }

// repeat();
