const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:Vikas654321@cohort.ovvlnw5.mongodb.net/todi");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todo", todoSchema);

module.exports = {
    todo
}