import React from "react";

import { useState, useEffect } from "react";
import { preserveMarkupFormat } from "terminal-kit/lib/misc";

const App = () => {
  const [result, setResult] = useState(() => {
    console.log("result")
  })

  const [text, setText] = useState("")
  const [number, setNumber] = useState("")
  const [operator, setOperator] = useState(".")

  function handleClickHelper(num){
    setNumber(
      number + num
    )
    setText(
      prevtext => prevtext + num
    )
  }

  function handleClick0(){
    handleClickHelper("0")
  }
  function handleClick1(){
    handleClickHelper("1")
  }
  function handleClick2(){
    handleClickHelper("2")
  }
  function handleClick3(){
    handleClickHelper("3")
  }
  function handleClick4(){
    handleClickHelper("4")
  }
  function handleClick5(){
    handleClickHelper("5")
  }
  function handleClick6(){
    handleClickHelper("6")
  }
  function handleClick7(){
    handleClickHelper("7")
  }
  function handleClick8(){
    handleClickHelper("8")
  }
  function handleClick9(){
    handleClickHelper("9")
  }

  function check(op, check=false){
    console.log(op)
    if(result == undefined){
      setResult(Number(number))
    }
    else if(operator == "+"){
      setResult(prevResult => prevResult + Number(number))
    }
    else if(operator == "-"){
      setResult(prevResult => prevResult - Number(number))
    }
    else if(operator == "*"){
      setResult(prevResult => prevResult * Number(number))
    }
    else if(operator == "/"){
      setResult(prevResult => prevResult / Number(number))
    }
    if(!check){
      setOperator(op)
      setText(prevtext => prevtext + op)
    }
    setNumber("")
  }


  function add(){
    check("+")
  }

  function subtract(){
    check("-")
  }

  function multiply(){
    check("*")
  }

  function divide(){
    check("/")
  }

  function equal(){
    check(operator, true)
  }

  function clear(){
    setNumber("")
    setOperator(".")
    setResult()
    setText("")
  }

  return (
    <div className="main">
      <button onClick={handleClick1}>1</button>
      <button onClick={handleClick2}>2</button>
      <button onClick={handleClick3}>3</button>
      <br/>
      <button onClick={handleClick4}>4</button>
      <button onClick={handleClick5}>5</button>
      <button onClick={handleClick6}>6</button>
      <br/>
      <button onClick={handleClick7}>7</button>
      <button onClick={handleClick8}>8</button>
      <button onClick={handleClick9}>9</button>
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleClick0}>0</button>
      <br/><br/>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <br/>
      <button onClick={divide}>/</button>
      <button onClick={equal}>=</button>
      <button onClick={clear}>clear</button>
      <br/><span>Operation : {text}</span>
      {/* <br/><span>number : {number}</span> */}
      <br/><span>Result : {result}</span>
    </div>
  );
}

export default App;
