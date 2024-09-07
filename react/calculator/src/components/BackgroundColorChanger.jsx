import React, { useState } from 'react';

const BackgroundColorChanger = () => {
    const [bgColor, setBgColor] = useState('#ffffff'); // Default to white

    const changeColor = () => {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
    };

    return (
        <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                Change Background Color
            </button>
        </div>
    );
};

export default BackgroundColorChanger;
