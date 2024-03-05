// import {useState, useEffect} from "react"

// const Student = (props)=> {

//     const [data, setData] = useState("")
//     const [email, setEmail] = useState("abc@gmail.com")

//     const submitData =(e)=> {
//         e.preventDefault()

//         fetch("http://localhost:8080/somedata", {
//             method : "POST",
//             headers : {
//                 "Content-Type" : "application/json",
//                 "Accept" : "application/json"
//             },
//             body : JSON.stringify({email: email})
//         })
//         .then((resp) => resp.json())
//         .then((data) => console.log(data))
//     }

//     const fetchData =()=>{

//         let url = `http://localhost:8080/`
//         let httpObject = {
//             method : "Get"
//             // headers : {
//             //     "Content-Type" : "application/json",
//             //     "Accept" : "application/json"
//             // }
//         }

//         fetch(url, httpObject)
//         .then((data)=> data.json())
//         .then((data)=>setData(data))

//     }

//     const makePostReq =()=>{
//         fetch("http://localhost:8080/addstudent", {
//             method : "POST",
//             body :JSON.stringify({
//                 "name": "Nikhil",
//                 "gender" : "male",
//                 "course" : "B.tech",
//                 "branch" : "Mech",
//                 "roll number" : "14235",
//                 "email" : "Nikhil@gmail.com"
//             }),
//             headers : {
//                 "Accept" : "application/json",
//                 "Content-Type": "application/json"
//             }
//         })
//             .then((serverResponse) => serverResponse.json())
//             .then((remoteData)=> console.log(remoteData))
//     }
//     return(
//         <div style={{...props.style, padding: "30px"}}>
//             {/* <button onClick ={fetchData}>Fetch data</button>
//             <p>Response from server : </p>
//             <b>{data.message}</b> */}
//             <form onSubmit={submitData} action="" method="GET">
//                 <input name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
//                 <button type="submit">Submit</button>
//             </form>
//             <button onClick ={makePostReq}>Click me</button>
//         </div>
//     )
// }

// export default Student

import "./students.css"
import { useState, useEffect } from "react"
const Student = (props) => {

    const [form, setForm] = useState({gender:"male"})
    const [response, setResponse] = useState({})

    const submitData = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/students/add", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((data) => data.json())
            .then((response) => setResponse(response))
    }

    return (
        <>
            <form className="student-data"
                onSubmit={submitData}
                action="" // http://localhost:3000/same page
                method="GET"
            >
                <input
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    name="email"
                    type={"email"}
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}

                />
                <input
                    name="rollNumber"
                    placeholder="RollNumber"
                    onChange={(e) => setForm({ ...form, rollNumber: e.target.value })}

                />
                <input
                    name="age"
                    placeholder="Age"
                    type="number"
                    onChange={(e) => setForm({ ...form, age: e.target.value })}

                />
                <select
                    name="gender"
                    placeholder="Gender"
                    onChange={(e) => setForm({ ...form, gender: e.target.value })}

                >
                    <option value="male">
                        Male
                    </option>
                    <option value="female">
                        Female
                    </option>
                    <option value="other">
                        Other
                    </option>

                </select>
                <button type="submit" >Add Student</button>
            </form>
            {
                response.message === "sucess" && <div style={{color: "green"}}>Added sucessfully</div>
            }
            {
                response.message === "failed" && <div style={{color: "red"}}>Error Occured</div>
            }
        </>
    )
}

export default Student