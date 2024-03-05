const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name : {
        require : true,
        type : String
    },
    email: {
        require :true,
        type :String
    },
    age: {
        require :true,
        type :Number
    },
    gender: {
        require :true,
        type :String
    },
    rollNumber: {
        require :true,
        type :String
    }
})

module.exports = mongoose.model("Student",studentSchema)