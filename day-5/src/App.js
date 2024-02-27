import Child from './Child.js'
import './App.css';
import React,{Component} from 'react';
function App(){
  let img0=<img src='https://th.bing.com/th?id=OIP.9RxloU44-6G9hn8f4KcR7gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'height={300} width={300}/>
  let img1=<img src='https://wallpaperset.com/w/full/1/6/4/125537.jpg'height={300} width={300} />
  let img2=<img src='https://th.bing.com/th/id/OIP.xM17SvUvQiqcaalnLPwB5AHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'height={300} width={300}/>
  let img3=<img src='https://th.bing.com/th/id/OIP.C-yfkJTnVYEckvH54iLLjgHaE5?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'height={300} width={300}/>
  let img4=<img src='https://th.bing.com/th/id/OIP.UkG89vab4fcyUBAA5VjC6gHaFP?w=263&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'height={300} width={300}/>
  let v=0;
  return(
    <div className='App'>
      <Child img1={img0} v={v+1}/>
      <Child img1={img1} v={v+2}/>
      <Child img1={img2} v={v+3}/>
      <Child img1={img3} v={v+4}/>
      <Child img1={img4}v={v+5}/>
    </div>
  )
}

  
export default App;
