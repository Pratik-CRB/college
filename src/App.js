import Student from "./components/students";
import Professor from "./components/professors";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  console.log("Hello")
  return (
    <BrowserRouter>
      <Routes>
        <Route 
           path="/students"
           element= {<Student/>}
        />
        <Route 
            path="/professors"
            element ={<Professor/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
