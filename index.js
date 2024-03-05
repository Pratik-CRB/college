const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")

const student = require("./routes/students")

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use("/students", student) //http://localhost/students then go to students.js file

const PORT = 8080;



app.listen(PORT, ()=>{
    console.log(`App is lisenting on ${PORT}`)
})








// testing --> postman or rest client



// const students = []
// const professors = []

// app.get("/", (req, resp) => {
//     console.log("Browser is requested")
//     resp.send({message : "Message from server"})
// })

// app.get("/allstudents", (req, resp) => {
//     resp.send(students)
// })

// app.get("/allprofessors", (req, resp) => {
//     resp.send(professors)
// })

// app.post("/addstudent", (req, resp) => {
//     students.push(req.body)
//     resp.send({status: "sucess", data: req.body})
// })

// app.post("/addprofessor", (req, resp) => {
//     professors.push(req.body)
//     resp.send({status: "sucess", data: req.body})
// })

// app.post("/somedata", (req, resp) => {
//     console.log(req.body)
//     resp.send({message: "Recieved data", status: "Sucess" })
// })