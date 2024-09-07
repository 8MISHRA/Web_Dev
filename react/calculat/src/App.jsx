import { useState } from 'react'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import mainPage from './components/mainPage'
import './styles/App.css'

function App() {
  const [calculation, setCalculation] = useState('')
  const [result, setResult] = useState('')

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const newResult = eval(calculation).toString()
        setResult(newResult)
        setCalculation(newResult)
      } catch (error) {
        setResult('Error')
        setCalculation('Error')
      }
    } else if (value === 'C') {
      setCalculation('')
      setResult('')
    } else {
      setCalculation(prev => prev + value)
    }
  }

  return (
    <>
    <div>
      {/* <mainPage /> */}
        <div className="screen-component">
          <Screen value={calculation} />
        </div>
        <div className='buttons'>
          <Buttons onButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
      )
}


export default App