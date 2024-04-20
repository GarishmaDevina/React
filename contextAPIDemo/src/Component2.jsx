import React, { useContext } from 'react'
import { mainContext } from './main'
import './index.css'

const Component2 = () =>
{
    const {mode,textcolor}= useContext(mainContext)
    return (
		<div style={{ width: "200px", height: "100px", border: "4px solid black" ,padding:"100px",backgroundColor:mode}}>
		<div >
		 <h2>Child</h2>
		</div>
		 <div style={{ color:textcolor}}>
			<p>Click the button to change my mode</p>
		 </div>
		
		</div>
	)
}

export default Component2