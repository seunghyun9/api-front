import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    const[height, setHeight]= useState(0);
    const[weight, setWeight]= useState(0);
    const[username, setUsername]= useState("");
    const res =()=>{
        let username=document.getElementById('username').value
        let weight=document.getElementById('height').value
        let height=document.getElementById('weight').value
        setUsername(username)
        setHeight(height)
        setWeight(weight)
    }

    return<Layout><h1>BMI</h1>
    
    <div>
    <label htmlFor=""><b>Username</b></label><br></br>
    <input id="username" type=""></input><br></br>

    <label htmlFor=""><b>height</b></label><br></br>
    <input id="height" type=""></input><br></br>

    <label htmlFor=""><b>weight</b></label><br></br>
    <input id="weight" type=""></input><br></br>

    <button onClick={()=>{res()}}>입력완료</button>
    <div>입력정보: 이름:{username} 키{height} 몸무게{weight}</div>
    </div>
    
     </Layout>
};