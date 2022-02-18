import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const [uname,setUname]=useState("");
    const[psw,setPsw]=useState(0);
    const res=()=>{
        let uname=document.getElementById('uname').value
        console.log('ID:'+uname)
        let psw=document.getElementById('psw').value
        console.log('PSW:'+psw)
        setUname(uname)
        setPsw(psw)
    }
    return<Layout><h1>로그인폼</h1>

    <div> 
    <label htmlFor=""><b>uname</b></label><br></br>
    <input id="uname" type="text"></input><br></br>
    <label htmlFor=""><b>psw</b></label><br></br>
    <input id="psw" type="text"></input><br></br>
    <button onClick={()=>{res()}}>login</button>
    <div>입력ID:{uname} 입력PW: {psw}</div>
    
     </div>
</Layout>
};