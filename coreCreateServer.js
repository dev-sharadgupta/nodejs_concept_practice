const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end("Home");
    } else if(req.url === "/about"){
        res.end("About");
    }else{
        res.end("Hello Other");
    }
});

server.listen(3000);

// Open:
// http://localhost:3000
