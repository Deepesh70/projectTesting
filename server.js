const http = require("http");

const port = 8081;

const TodoList = ["1","2", "3"];

http
    .createServer((require, response) => {
        const { method, url } = require;
        
        if(url === "/TodoList"){
            if(method === "GET"){
                response.writeHead(200,{"Content-Type": "text/html"});
                response.write(TodoList.toString());
            }
            else{
                response.write(404);
            }
        }
        else{
            response.write(404);    
        }

        response.end();
    })
    .listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });