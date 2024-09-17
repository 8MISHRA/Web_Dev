import React, { useState } from 'react';

function FAQs() {

    const [activeIndex, setActiveIndex] = useState(0);

    const faqItems = [
        {
            question: "How long does it take to build a website?",
            answer: "Websites can range so much in terms of content and complexity that it is impossible to answer directly without knowing the details. Each query will give you an estimated timeline for both design and development work before we can start. But usually it takes from 1 - 4 weeks."
        },
        {
            question: "How much does a project cost?",
            answer: ""
        },
        {
            question: "What services do you offer exactly?",
            answer: ""
        },
        {
            question: "What if I have the website designed but need development only?",
            answer: ""
        },
        {
            question: "Can you create custom illustrations, icons or mockups for me?",
            answer: ""
        }
    ];

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
};

export default FAQs;
