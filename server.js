const http = require("http");

const port = 8000;

http
    .createServer((require, response) => {
        response.writeHead(200, { "Content-Type": "text/html"});
        response.end("<h1>Hello World</h1>");
    })
    .listen(port, ()  => {
        console.log(`Server is running on port http://localhost:${port}`);
    });