// import { useState } from 'react'
// import Screen from './components/Screen'
// import Buttons from './components/Buttons'
// import mainPage from './components/mainPage'
// import './styles/App.css'

// function App() {
//   const [calculation, setCalculation] = useState('')
//   const [result, setResult] = useState('')

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         const newResult = eval(calculation).toString()
//         setResult(newResult)
//         setCalculation(newResult)
//       } catch (error) {
//         setResult('Error')
//         setCalculation('Error')
//       }
//     } else if (value === 'C') {
//       setCalculation('')
//       setResult('')
//     } else {
//       setCalculation(prev => prev + value)
//     }
//   }

//   return (
//     <>
//     <div>
//       {/* <mainPage /> */}
//         <div className="screen-component">
//           <Screen value={calculation} />
//         </div>
//         <div className='buttons'>
//           <Buttons onButtonClick={handleButtonClick} />
//         </div>
//       </div>
//     </>
//       )
// }


// export default App


import React, { useState } from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import './styles/App.css';

// import mainPage from './components/mainPage'

const App = () => {
  const [input, setInput] = useState('');

  // Function to handle button click
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Calculate the result
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      // Clear the screen
      setInput('');
    } else {
      // Append clicked value to the screen
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Screen value={input} />
      {/* <div className="button-grid"> */}
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btnValue) => (
          <Buttons key={btnValue} value={btnValue} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;

