import React, { useState } from 'react';
import "../styles/calculator.css"

const SimpleCalculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleAddition = () => {
        <h1 style={{font:"200px" }}>setResult(parseFloat(num1) + parseFloat(num2));</h1>
    };

    const handleSubtraction = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const handleMultiplication = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivision = () => {
        if (num2 !== '0') {
            setResult(parseFloat(num1) / parseFloat(num2));
        } else {
            setResult('Cannot divide by zero');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Simple Calculator</h2>
            <div>
                <input className='input-area'
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Enter first number"
                    style={{ marginRight: '10px' }}
                />
                <input className='input-area'
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Enter second number"
                />
            </div>
            <div className='buttons'>
                <button className="innerButton" onClick={handleAddition} style={{ marginRight: '10px', padding: "20px"}}>+</button>
                <button className="innerButton" onClick={handleSubtraction} style={{ marginRight: '10px', padding: "20px" }}>-</button>
                <button className="innerButton" onClick={handleMultiplication} style={{ marginRight: '10px', padding: "20px" }}>*</button>
                <button className="innerButton" onClick={handleDivision} style={{ marginRight: '10px', padding: "20px" }}>/</button>
            </div>
            <div className="result">
                <h1>Result: {result !== null ? result : 'N/A'}</h1>
            </div>
        </div>
    );
};

export default SimpleCalculator;
