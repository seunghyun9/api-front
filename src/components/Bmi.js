import React from "react";
import Layout from "../containers/Layout";

export default function Bmi(){
    return(<Layout><h1>BMI</h1>
    <form>
    <div>
    <label><b>이름</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>키(cm)</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>몸무게(kg)</b></label><br></br>
    <input type="text"></input><br></br>

    
    <button>입력완료</button>
    </div>
    </form>   
     </Layout>)
}
