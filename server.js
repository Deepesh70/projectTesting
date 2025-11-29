const http = require("http");

const port = 8081;

http
    .createServer((require, response) => {
        response.writeHead(200, { "Content-Type": "text/html"});
        response.write("<h1>Hello World</h1>");
        response.end();
    })
    .listen(port, ()  => {
        console.log(`Server is running on port http://localhost:${port}`);
    });