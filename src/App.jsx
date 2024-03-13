import './App.css';

import { useState } from 'react';

function App() {


  let [counter, setCounter]=useState(15)

// let counter=15

const addValue=()=>{
  // console.log("clicked",counter);
//  counter=counter+1
// counter= counter+1
setCounter(counter+1)
}
const removeValue=()=>{
  setCounter(counter -1)
}


  return (
    <>
     <h1> this is first  react project</h1>
     <h2> Counter value:{counter}</h2>
     <button
     onClick={addValue}>Add value</button>
     <br /> 
    
     <button onClick={removeValue}>Remove value</button>


     <p> footer:{ counter}</p>
    </>
  )
}

export default App
