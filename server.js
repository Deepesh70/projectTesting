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
                response.end();
            } else if(method === "POST"){
                let body = '';
                request.on('error',(error) => { 
                    console.error(error);
                })
                request.on("data",(chunk) => {
                    body= body + chunk;
                })
                request.on("end", () => {
                    body = JSON.parse(body);
                    console.log("Received:", body);
                    TodoList.push(body.item);
                    console.log("TodoList:", TodoList);
                    response.writeHead(201);
                    response.end();
                });
            }
            else{
                response.writeHead(404);
                response.end();
            }
        }
        else{
            response.writeHead(404);
            response.end();    
        }
    })
    .listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });