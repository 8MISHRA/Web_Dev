import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <h1>Temperature Converter App</h1>
            <TemperatureConverter />
        </div>
    </>
  )
}

export default App
