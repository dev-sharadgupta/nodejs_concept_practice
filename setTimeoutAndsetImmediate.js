// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);

// setImmediate(() => {
//     console.log("setImmediate");
// });

const fs = require("fs");

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log("setTimeout");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate");
    });
})

