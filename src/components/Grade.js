import React from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    return<Layout><h1>성적표</h1>
    <form>
    <div>
    <label><b>이름</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>국어점수</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>영어점수</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>수학점수</b></label><br></br>
    <input type="text"></input><br></br>
    
    
    <button>성적표 출력</button>
    </div>
    </form>   
    </Layout>
};