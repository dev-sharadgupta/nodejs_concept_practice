const buffer = Buffer.from("Hello");

console.log(buffer);

console.log(buffer.toString());

const fs = require("fs");

fs.readFile(__filename, (err, data) => {
    console.log(data); // buffer
})