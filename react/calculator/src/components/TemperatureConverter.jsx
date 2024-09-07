import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(value !== '' ? (value * 9/5 + 32).toFixed(2) : '');
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(value !== '' ? ((value - 32) * 5/9).toFixed(2) : '');
    };

    return (
        <div>
            <h2>Temperature Converter</h2>
            <label>
                Celsius:
                <input
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                />
            </label>
            <label>
                Fahrenheit:
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                />
            </label>
        </div>
    );
};

export default TemperatureConverter;
