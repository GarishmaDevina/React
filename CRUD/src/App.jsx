import React from 'react';
import Movies from './Movies';
import { MovieProvider } from './MovieContext';
function App() {
  
  return (
   <MovieProvider>
           <Movies/>
   </MovieProvider>
  )
}

export default App;
