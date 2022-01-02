import React,{useState} from "react";
import './App.css';

function Counter(){

  const [count,setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(count+1);
  }

  const decreaseCounter = () => {
    setCounter(count-1);
  }
    return(
    <div>
      <button onClick = {increaseCounter} >
          +
      </button>
      <h2>{count}</h2>
      <button onClick = {decreaseCounter} >
          -
      </button>
    </div>
    ) 
}
export default Counter;