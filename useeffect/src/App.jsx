import React, { useEffect, useState } from "react";
import './App.css'
function App(){
  const [products,setProducts]=useState(0)
  useEffect(()=>{
    console.log("useffect clicked")
  },[products])
   return(
    <div>
      <h1>count is :{products}</h1>
      <button onClick={()=>setProducts(products+1)}>click me</button>
    </div>
   )

}
export default App