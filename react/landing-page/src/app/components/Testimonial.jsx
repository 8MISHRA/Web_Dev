import React from 'react';

const testimonialsData = [
  {
    "quote": "AI Ally's intuitive interface and seamless integration have transformed the way we manage our workflows!",
    "name": "Liam Carter",
    "position": "CTO, NexaTech"
},
{
    "quote": "Thanks to AI Ally, we've significantly boosted productivity while reducing operational overhead.",
    "name": "Sophia Green",
    "position": "Operations Manager, TechCore"
},
{
    "quote": "The AI-powered insights from AI Ally have given us a competitive edge by optimizing our decision-making process.",
    "name": "Emily Rodriguez",
    "position": "Data Scientist, Innovate Labs"
}

];

const cardStyles = [
  { backgroundColor: 'green', color: 'white' },
  { backgroundColor: 'green', color: 'white' },
  { backgroundColor: 'green', color: 'white' },
];

const Testimonial = () => {
  return (
    <div style={styles.testimonialContainer}>
      <h2>Testimonials</h2>
      <p>
        See for yourself how our AI testing tool has revolutionized workflows for our clients – their success stories speak volumes.
      </p>

      <div style={styles.testimonialCards}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} style={{ ...styles.testimonialCard, ...cardStyles[index] }}>
            <p style={styles.quote}>“{testimonial.quote}”</p>
            <h3 style={styles.name}>{testimonial.name}</h3>
            <p style={styles.position}>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  testimonialContainer: {
    textAlign: 'center',
    padding: '2rem',
  },
  testimonialCards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  testimonialCard: {
    borderRadius: '8px',
    padding: '1.5rem',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
  },
  quote: {
    fontStyle: 'italic',
    marginBottom: '1rem',
  },
  name: {
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  
  position: {
    color: '#f1c40f', // Yellow
  },


};



export default Testimonial;
