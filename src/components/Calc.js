import React from "react";
const Calc = ()=>{
    return<><h1>계산기</h1>
    <form>
    <div>
    <label><b>숫자1</b></label><br></br>
    <input type="number"></input><br></br>
    <label><b>연산자</b></label><br></br>
    <input type="text"></input><br></br>
    <label><b>숫자2</b></label><br></br>
    <input type="number"></input><br></br>

    
    <button>계산하기</button>
    </div>
    </form>   
    
    </>
}
export default Calc