import { useState } from 'react'
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
      <h1>{count}</h1>
      <button onClick={decrement}>Substract</button>
    </>
  )
}

export default App
