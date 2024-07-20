const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.parse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "Wrong input",
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get("/todo", async(req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})


app.post("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "Wrong input",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);