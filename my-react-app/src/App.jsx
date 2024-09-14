import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter,setCounter]=useState(0);

  function  incValue(){
    if(counter<20){setCounter(counter+1);}
    
  }
  function  decValue(){
    if(counter>0){ setCounter(counter-1);}
    
   
  }
  return (
    <>
    <h1>counter {counter}</h1>
    <button onClick={incValue}>Increase</button>
    <button onClick={decValue}>Decrease</button>    
    </>
  )
}

export default App
