import React from 'react';
import Image from 'next/image';

const DiscoverPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Different destinations</h1>
        <p style={styles.description}>
          We explore the diverse ways in which this technology can revolutionize work across various industries and fields.
        </p>
        <p style={styles.subdescription}>
          Discover how AI can streamline processes and elevate your work to new heights.
        </p>
        <a href="#" style={styles.link}>
          Discover all applications →
        </a>
      </div>

      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <Image
              src="/3.png" 
              alt="Students"
              width={300}
              height={200}
              style={styles.image}
            />
          </div>
          <div style={styles.cardBody}>
            <h3 style={styles.cardTitle}>Students</h3>
            <p style={styles.cardDescription}>
              AI Club can assist in research, provide learning materials, and answer questions.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <Image
              src="/2.png" 
              alt="Professionals"
              width={300}
              height={200}
              style={styles.image}
            />
          </div>
          <div style={styles.cardBody}>
            <h3 style={styles.cardTitle}>Professionals</h3>
            <p style={styles.cardDescription}>
              AI Club can provide quick access to relevant professional and other data analytics insights.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.imageContainer}>
            <Image
              src="/3.png" 
              alt="Writers"
              width={300}
              height={200}
              style={styles.image}
            />
          </div>
          <div style={styles.cardBody}>
            <h3 style={styles.cardTitle}>Writers</h3>
            <p style={styles.cardDescription}>
              AI Club can help writers by generating ideas, suggesting improvements in writing style.
            </p>
          </div>
        </div>
      </div>

      <button style={styles.footerButton}>And more than 50 other destinations</button>

      <div style={styles.newSection}>
        <div style={styles.mobileChat}>
          <Image
            src="/mobile.png"
            alt="Mobile chat UI"
            width={350}
            height={400}
          />
        </div>

        <div style={styles.optionList}>
          <button style={styles.optionButton}>🔍 Finding information</button>
          <button style={{ ...styles.optionButton, ...styles.activeOption }}>🎨 Help for designers</button>
          <p style={styles.optionDescription}>
            AI-powered applications can analyze vast amounts of visual data and provide designers with inspiration for their creative projects.
          </p>
          <button style={styles.optionButton}>🏠 Home automation</button>
          <button style={styles.optionButton}>🎮 Entertainment</button>
          <button style={styles.optionButton}>📅 Planning assistance</button>
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   container: {
//     padding: '40px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     textAlign: 'center',
//   },
//   header: {
//     marginBottom: '30px',
//   },
//   title: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   description: {
//     fontSize: '1.1rem',
//     color: 'white',
//   },
//   subdescription: {
//     fontSize: '1rem',
//     color: 'white',
//     marginTop: '5px',
//   },
//   link: {
//     display: 'block',
//     marginTop: '20px',
//     fontSize: '1rem',
//     color: '#0070f3',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
//   cardsContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '30px',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     width: '30%',
//     textAlign: 'left',
//     position: 'relative',
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: '200px',
//   },
//   tryButton: {
//     position: 'absolute',
//     top: '10px',
//     left: '10px',
//     padding: '8px 12px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   cardBody: {
//     padding: '20px',
//   },
//   cardTitle: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   cardDescription: {
//     fontSize: '1rem',
//     color: '#666',
//   },
//   footerButton: {
//     marginTop: '40px',
//     backgroundColor: '#00c853',
//     color: '#fff',
//     border: 'none',
//     padding: '15px 40px',
//     borderRadius: '25px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
//   newSection: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: '50px',
//   },
//   mobileChat: {
//     width: '300px',
//   },
//   optionList: {
//     width: '40%',
//     textAlign: 'left',
//   },
//   optionButton: {
//     width: '100%',
//     padding: '15px',
//     marginBottom: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f5f5f5',
//     border: 'none',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     textAlign: 'left',
//   },
//   activeOption: {
//     backgroundColor: '#000',
//     color: '#fff',
//   },
//   optionDescription: {
//     fontSize: '0.9rem',
//     color: '#666',
//     margin: '10px 0 20px 0',
//   },
// };

export default DiscoverPage;
