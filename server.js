const http = require("http");

const port = 8081;

const TodoList = ["1","2", "3"];

http
    .createServer((require, response) => {
        const { method, url } = require;
        console.log(method, url);
        response.end();
    })
    .listen(port, ()  => {
        console.log(`Server is running on port http://localhost:${port}`);
    });