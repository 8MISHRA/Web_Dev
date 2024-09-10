import { useState } from 'react'
import Button from './components/Button'
import Screen from './components/Screen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Screen />
    <Button />
    </>
  )
}

export default App
