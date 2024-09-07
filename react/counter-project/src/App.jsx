import { useState } from 'react'
import DisplayComponent from './component/DisplayComponent';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const count = 0;
  const increment = () => {
    setCount(count+1);
    console.log(count)
  }
  const decrement = () => {
    setCount(count-1);
    console.log(count)
  }


  return (
    <>
      <button onClick={increment}>Add</button>
      <DisplayComponent count={count}/>
      {/* <h1>{count}</h1> */}

      {/* {count > 5 && (
        <button onClick={decrement}>Subtract</button>
      )} */}
      {(()=>{
        if(count > 5){
          return <button onClick={decrement}>Subtract</button>
        }
      })()}
    </>
  )
}

export default App
