import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName]=useState("");
    const[lang,setLang]=useState(0);
    const[eng,setEng]=useState(0);
    const[math,setMath]=useState(0);
    const res=()=>{
        let name=document.getElementById('name').value 
        console.log('이름:' +name)
        let lang=document.getElementById('lang').value
        console.log('국어:' +lang)
        let math=document.getElementById('math').value
        console.log('수학:' +math)
        let eng=document.getElementById('eng').value
        console.log('영어:' +eng)
        setName(name)
        setEng(eng)
        setLang(lang)
        setMath(math)
    }
        return<Layout><h1>성적표</h1>
    <div>
    <label htmlFor=""><b>이름</b></label><br></br>
    <input id="name" type="text"></input><br></br>
    <label htmlFor=""><b>국어점수</b></label><br></br>
    <input id="lang" type=""></input><br></br>
    <label htmlFor=""><b>영어점수</b></label><br></br>
    <input id="eng" type=""></input><br></br>
    <label htmlFor=""><b>수학점수</b></label><br></br>
    <input id="math" type=""></input><br></br>
    
    
    <button onClick={()=>{res()}}>성적표 출력</button>
    <div>##성적표## </div>
    <div>이름:{name}</div>
    <div>국어:{lang}</div>
    <div>영어:{eng}</div>
    <div>수학:{math}</div>
    </div>
    </Layout>
};