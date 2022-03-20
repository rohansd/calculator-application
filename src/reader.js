// import React from "react";

// import { useState } from "react";

// const App = () => {
//   const [result, setResult] = useState(0)
//   const [number, setNumber] = useState("")

//   function handleClick0(){
//     const el = document.getElementById("number0")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }

//   function handleClick1(){
//     const el = document.getElementById("number1")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick2(){
//     const el = document.getElementById("number2")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick3(){
//     const el = document.getElementById("number3")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick4(){
//     const el = document.getElementById("number4")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick5(){
//     const el = document.getElementById("number5")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick6(){
//     const el = document.getElementById("number6")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick7(){
//     const el = document.getElementById("number7")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick8(){
//     const el = document.getElementById("number8")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }
//   function handleClick9(){
//     const el = document.getElementById("number9")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//   }

//   function add(){
//     const el = document.getElementById("+")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//     setResult(
//       prevresult => prevresult + Number(number)
//     )
//   }

//   function subtract(){
//     const el = document.getElementById("-")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//     setResult(
//       prevresult => prevresult - Number(number)
//     )
//   }
//   function multiply(){
//     const el = document.getElementById("*")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//     setResult(
//       prevresult => prevresult * Number(number)
//     )
//   }
//   function divide(){
//     const el = document.getElementById("/")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//     setResult(
//       prevresult => prevresult / Number(number)
//     )
//   }

//   function equal(){
//     const el = document.getElementById("=")
//     setNumber(
//       prevnumber => prevnumber + el.innerText
//     )
//     setResult(
//       prevresult => prevresult / Number(number)
//     )
//   }

//   function clear(){
//     setResult(0)
//     setNumber("")
//   }



//   return (
//     <div className="main">
//       <button id="number0" onClick={handleClick0}>0</button>
//       <button id="number1" onClick={handleClick1}>1</button>
//       <button id="number2" onClick={handleClick2}>2</button>
//       <button id="number3" onClick={handleClick3}>3</button>
//       <button id="number4" onClick={handleClick4}>4</button>
//       <button id="number5" onClick={handleClick5}>5</button>
//       <button id="number6" onClick={handleClick6}>6</button>
//       <button id="number7" onClick={handleClick7}>7</button>
//       <button id="number8" onClick={handleClick8}>8</button>
//       <button id="number9" onClick={handleClick9}>9</button>
//       <button id="+" onClick={add}>+</button>
//       <button id="-" onClick={subtract}>-</button>
//       <button id="*" onClick={multiply}>*</button>
//       <button id="/" onClick={divide}>/</button>
//       <button id="=" onClick={equal}>=</button>
//       <button id="clear" onClick={clear}>clear</button>
//       <br/>
//       <span id="number">{number}</span>
//     </div>
//   );
// }

// export default App;
