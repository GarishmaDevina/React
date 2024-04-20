import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function RandomQuoteApp() {
  const[quote,setQuote]=useState('')
  const [author, setAuthor] = useState('')
  const [btnClick,setbtnClick]=useState(0)
  const [savedQuotes, setSavedQuotes] = useState([]);
  useEffect(()=>{
    axios.get('https://api.quotable.io/random')
    .then((data)=>{
      setQuote(data.data.content);
      setAuthor(data.data.author)
    })
    
  },[btnClick])
  const saveQuote = () => {
    
    const newSavedQuotes = [...savedQuotes, quote];
    setSavedQuotes(newSavedQuotes);

  
    //localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
  };
  return (
    <>
      <div className='App'>
      
      <h3>{quote}</h3>
      <h4>-{author}</h4>
      <button onClick={()=>setbtnClick(btnClick+1)}>click me</button>&nbsp;&nbsp;
      <button onClick={saveQuote}>Save Quote</button>
      </div>
      <h2 >Saved Quotes</h2>
      <div className='list'> 
      
      <ul>
        {savedQuotes.map((savedQuote, index) => (
          <li key={index}>{savedQuote}</li>
        ))}
      </ul>
      </div>
  </>
      
    
  )
}

export default RandomQuoteApp
