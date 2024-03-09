
import { useState } from 'react';
import './App.css';

function App() {
  let stock=25;
  const[count,setcount]=useState(0)
  function add(){
    
    if(count<stock){
      setcount(count+1)
      
    }
    else{
      alert("This is max limit")
    }

  }
  function minus(){
    if(count>0){
      setcount(count-1)
    }
    else{
      alert("This is min limit")
    }
  }
  const type=(num)=>(
    num%2===0?'Even':'Odd'
  )
  
  return (
    <div className='App-h'> 
    <h2>Counter:{count}</h2>
    <div className="App">
    
    <button onClick={add}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={()=>setcount(0)}>Reset</button>
    <p>{count}is {type(count)}</p>
    
  </div></div>
    
  );
}

export default App;
