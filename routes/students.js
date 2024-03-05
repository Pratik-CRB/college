const express = require("express")
const mongoose = require ("mongoose")
const router = express.Router()
const Student = require("../models/student")

mongoose.connect('mongodb://127.0.0.1:27017/students')
.then(() => console.log('Connected!'));

//http:localhost:8080/students/add
router.post("/add",async (req,resp)=>{
    try{
        const data = Student.create(req.body)
        resp.status(200).json({message : "sucess"})
    }catch(e){
        resp.status(500).json({message: e.message})
    }
})

// router.get("/all", (req,resp)=>{
//     resp.status(200).json({status:"GET API"})
// })

// router.post("/all", (req,resp)=>{
//     resp.status(200).json({status:"POST API"})
// })

module.exports = router