const express = require("express");
const app = express();

function logger(req, req, next) {
    console.log("Middleware running");
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000);