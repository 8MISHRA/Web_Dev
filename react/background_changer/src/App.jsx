import { useState } from 'react'
import BackgroundColorChanger from './components/BackgroundColorChanger';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundColorChanger />
    </>
  )
}

export default App
