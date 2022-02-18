import React from "react";
import {useRoutes} from 'react-router-dom' //{}는 객체는 제이슨 단 하나라 생략가능
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Login from "./components/Login";
import Home from "./pages/Home";
import Counter from "./components/Counter";

export default function App(){
    return useRoutes([
        { path : "/", element:<Home/>},
        { path : "bmi", element:<Bmi/>},
        { path : "calc", element:<Calc/>},
        { path : "grade", element:<Grade/>},
        { path : "login", element:<Login/>},
        { path : "counter", element:<Counter/>},
    ]);
}



/** 
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
*/
