// src/ThirdPage.jsx
import React from 'react';
import './ThirdPage.css'

const ThirdPage = () => {
    return (
        <div className="container-third">
            <div className="chat">
                <div className="chat-body">
                    <img
                        alt="A smiling man baker passes a basket of buns to a woman customer, in the background there is a pile of bread buns"
                        className="message-image"
                        height="200"
                        src="src\assets\images\thirdpage.png"
                        width="300"
                    />
                </div>
            </div>
            <div className="options">
                <div className="option">
                    <i className="fas fa-search"></i>
                    <div className="option-text">Finding information</div>
                </div>
                <div className="option active">
                    <i className="fas fa-band-aid"></i>
                    <div>
                        <div className="option-text">Help for designers</div>
                        <div className="option-description">
                            Ai - powered applications can analyze vast amounts of visual data and provide designers with inspiration for their creative projects
                        </div>
                    </div>
                </div>
                <div className="option">
                    <i className="fas fa-home"></i>
                    <div className="option-text">Home automation</div>
                </div>
                <div className="option">
                    <i className="fas fa-film"></i>
                    <div className="option-text">Entertainment</div>
                </div>
                <div className="option">
                    <i className="fas fa-calendar-alt"></i>
                    <div className="option-text">Planning assistance</div>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;
