import React from 'react';

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="content">
        <h1>Unleash the full potential of AI</h1>
        <p>
          AI Club is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.
        </p>
        <div className="cta-buttons">
          <button className="get-app">Get the App</button>
          <button className="learn-more">More</button>
        </div>
        <div className="ratings" style={{ color: 'white' }}>
          <p style={{ margin: '0' }}>
            4.9 <br /> <span style={{ fontSize: '14px' }}>Rating on AppStore </span>
          </p>
          <p style={{ margin: '2' }}>
            700k+ <br /> <span style={{ fontSize: '14px' }}> Active users</span>
          </p>
        </div>
      </div>
      <div className="mockup">
        <img src="/phone.png" alt="Phone Mockup" />
      </div>
    </main>
  );
};

export default MainSection;
