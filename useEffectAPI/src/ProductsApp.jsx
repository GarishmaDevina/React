import React, { useEffect, useState } from "react";
import './App.css'
function ProductsApp(){
  const[items,setItems]=useState(0)
  const [products,setProducts]=useState([])
  
  useEffect(()=>{
    
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>setProducts(data))

    
  },[])
  

  return(
  <div >
    
    <h1>Fetching Products</h1>
    <h2 style={{textAlign:"right"}}>Items :{items}</h2>
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:'30px',}}>
      { products.map((pr,index)=>(
        <div style={{boxShadow:"3px 3px 3px 3px black"}}key={index}>
          <img src={pr.image} alt={pr.title} height='100'width='100'/>
          <button onClick={()=>setItems(items+1)}
                  
            >
             Add to cart
             </button>
          
          </div>
      ))}
    </div>
    
  </div>)
}
export default ProductsApp