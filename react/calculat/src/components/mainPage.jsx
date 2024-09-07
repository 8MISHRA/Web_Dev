import React from 'react'
import Screen from './Screen'
import Buttons from './Buttons'

function mainPage() {
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

export default mainPage
