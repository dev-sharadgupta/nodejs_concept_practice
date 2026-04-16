const fs = require("fs");

const stream = fs.createReadStream("./callbackPromiseAsyncAwaitExample.js");

stream.on("data", (chunk) => {
    console.log(chunk);
});

// const writer = fs.createWriteStream("./test.js");
// writer.write("Hello");

// Use Pipe
const writer = fs.createWriteStream("./test.js");

stream.pipe(writer);