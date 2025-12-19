const express = require('express');

const app = express();

app.use(express.json());

const port = 8081;

const TodoList = ["1","2", "3", "4"];

app.get('/todos', (req, res) => {

    res.status(200).send(TodoList);
});

app.post('/todos', (req, res) => {

    let newtodo = req.body.item;
    TodoList.push(newtodo);
    res.status(200).send({
        message: "Task added Successfully!",
    }); 
});


app.delete('/todos', (req, res) => {
    let deleteItem = req.body.item;
    TodoList.find((element, index) => {
        if(element === deleteItem ){
            TodoList.splice(index, 1);

        }
    });
    res.status(202).send({
        message: `Deleted the item ${req.body.item}`,
    })
});

app.all('/todos', (req, res) => {
    res.status(501).send();
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/todos`);
}) 