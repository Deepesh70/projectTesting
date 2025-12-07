const http = require("http");

const port = 8081;

const TodoList = ["1","2", "3"];

http
    .createServer((request, response) => {
        const { method, url } = request;
        
        if(url === "/TodoList"){
            if(method === "GET"){
                response.writeHead(200,{"Content-Type": "text/html"});
                response.write(TodoList.toString());
            } else if(method === "POST"){
                let body = '';
                request.on('error',() => {
                    console.error(error);
                })
                request.on("data",(chunk) => {
                    body= body + chunk;
                    console.log(chunk);
                })
                request.on("end", () => {
                    body = JSON.parse(body);
                    console.log("Data: ", body);
                });
            }
            else{
                response.writeHead(404);
            }
        }
        else{
            response.writeHead(404);    
        }

        response.end();
    })
    .listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });