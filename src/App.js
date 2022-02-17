import React from "react";
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom' //{}는 객체는 제이슨 단 하나라 생략가능
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Login from "./components/Login";
import Hello from "./components/Hello";
import Home from "./pages/Home";
const App= () =>{
return(
    <div>
<Router>
    <Routes>
    <Route expected path="/" element={<Home/>}/>
            <Route path="/bmi" element={<Bmi/>}/>
            <Route path="/calc" element={<Calc/>}/>
            <Route path="/grade" element={<Grade/>}/>
            <Route path="/login" element={<Login/>}/>
    </Routes>
</Router> 
</div>
)
}
export default App;