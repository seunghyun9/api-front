import React from "react";
import Layout from "../containers/Layout";
export default function Login(){
    return<Layout><h1>로그인폼</h1>
    <form>
    <div> 
    <label><b>uname</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>psw</b></label><br></br>
    <input type="text"></input><br></br>
    <button>login</button>
     </div>

</form> 
        

</Layout>
};