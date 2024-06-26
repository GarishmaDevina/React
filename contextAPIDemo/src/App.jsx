import React from 'react'
import { useState } from 'react'
import { mainContext } from './main'
import Component from './Component'
import './index.css'
const App = () => {

  const [mode,setMode]=useState("")
  const[textcolor,setTextcolor]=useState("")
  const[isDarkMode,setIsDarkMode]=useState(true)


  const toggleDarkMode=()=>{
    setIsDarkMode(prevMode=>!prevMode)
    isDarkMode?(setMode("black"),setTextcolor("white") ):(setMode("white"),setTextcolor("black"))
  }

  return (
    <div style={{width:'800px',height:'700px',border:'4px solid white',padding:"100px"}}>
     <h2>App Component</h2>
      <button onClick={toggleDarkMode}  style={{position:"absolute" ,left:"30px" ,top:"30px"}}>{isDarkMode?('light'):('dark')}</button>
      <mainContext.Provider value={{mode,textcolor}}>
        <Component />
			</mainContext.Provider>

		</div>
  )
}

export default App