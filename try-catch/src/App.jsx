import React, { useEffect, useState } from "react";
function MyComponent(){
  const[data,setData]=useState('');
  useEffect(()=>{
     const fetchData=async()=>{
      try{
        const response=await fetch('https://fakestoreapi.com/products')
        const result=await response.json();
        setData(result);
      }
      catch(error){
        console.error('Error fetching data:',error);
      }
     };
     fetchData();
  },[])
  return <div>{data ?JSON.stringify(data) : 'Loading...'}</div>;
  
}
export default MyComponent