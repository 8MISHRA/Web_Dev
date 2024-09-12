import React, { useState } from 'react';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import './styles/App.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        if (Number.isInteger(result)) {
          setInput(result.toString());
        } else {
          const decimalPlaces = (result.toString().split('.')[1] || '').length;
          setInput(decimalPlaces > 3 ? result.toFixed(3).toString() : result.toString());
        }
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Screen value={input} />
      <div className="buttons" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
          {['AC', '*', '-', '+', '/', '%', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '='].map((btnValue) => (
            <Buttons key={btnValue} value={btnValue} onClick={handleClick} style={{ flexBasis: '33.33%' }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
