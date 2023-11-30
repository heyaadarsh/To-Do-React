const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
    toDo: {
        type: String,
        required: true,
    },
    
})

module.exports = mongoose.model("ToDo", toDoSchema);