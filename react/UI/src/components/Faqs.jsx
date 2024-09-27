import React, { useState } from 'react';
import faqItems from '../data/Faqs.json';
import '../styles/FAQs.css';

function FAQs() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>FAQs</h1>
            {faqItems.map((item, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
                    <h2>
                        {item.question} 
                        <i className={`fas ${activeIndex === index ? 'fa-times' : 'fa-plus'}`}></i>
                    </h2>
                    {activeIndex === index && <p>{item.answer}</p>}
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default FAQs;
