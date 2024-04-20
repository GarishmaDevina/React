import React from 'react'
import {Link} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
  return (
    <div className='height-100 width-100 text-white bg-black justify-content-between'>
      <button style={{gap:15}}><Link to='/randomquote'>RandomQuote</Link></button>
      <button><Link to ='/image-creation'>Image-Creation</Link></button>
      <button><Link to='/movies'>Movies</Link></button>
      <button><Link to ='/state-build'>Even-Odd Counter</Link></button>
      <button><Link to ='/useEffectAPI'>ProductsAPI</Link></button>
      <button><Link to ='/todo'>Todo</Link></button>
    </div>
  )
}

export default Header
