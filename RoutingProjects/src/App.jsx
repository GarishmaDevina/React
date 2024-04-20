import React from 'react'
import Header from './Header'
import Home from './pages/Home'
import RandomQuoteApp from '../../randomquote/src/RandomQuoteApp'
import ImageCreationApp from '../../image-creation/src/ImageCreationApp'
import MoviesApp from '../../movies/src/MoviesApp'
import StateBuildApp from '../../state-build/src/StateBuildApp'
import ProductsApp from '../../useEffectAPI/src/ProductsApp'
import TodoApp from '../../todo/src/TodoApp'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
        <Route path='/randomquote' element={<RandomQuoteApp/>}/>&nbsp;&nbsp;
        <Route path='/image-creation' element={<ImageCreationApp/>}/>&nbsp;&nbsp;
        <Route path='/movies' element={<MoviesApp/>}/>&nbsp;&nbsp;
        <Route path='/state-build'element={<StateBuildApp/>}/>&nbsp;&nbsp;
        <Route path='/useEffectAPI' element={<ProductsApp/>}/>&nbsp;&nbsp;
        <Route path='/todo' element={<TodoApp/>}/>
      </Routes>
    </div>
  )
}

export default App
