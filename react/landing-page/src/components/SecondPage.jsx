import Card from './Card';
import './SecondPage.css';
const cardsData = [
  {
    title: "Students",
    description: "AI Ally can assist in research, provide learning materials, and answer questions",
    imgSrc: "src/assets/images/cardimage1.jpeg",
  },
  {
    title: "Professionals",
    description: "AI Ally can provide quick access to relevant information and other data analysis insights",
    imgSrc: "src/assets/images/cardimage3.jpeg",
  },
  {
    title: "Writers",
    description: "AI Ally can help writers by generating ideas suggesting improvements in writing style",
    imgSrc: "src/assets/images/cardimage2.jpeg",
  },
];

const SecondPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Different Destinations</h1>
      </div>
      <div className="text-above-cards">
        <div>
          <p>We explore the diverse ways in which this technology can revolutionize work across various industries and fields.</p>
        </div>
        <div>
          <p>Discover how AI can streamline processes and elevate your work to new heights.</p>
        </div>
        <div>
          <p>Discover all applications</p>
        </div>
      </div>
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} imgSrc={card.imgSrc} />
        ))}
      </div>
      <div className="more-destinations">
        <button>And more than 50 other destinations</button>
      </div>
    </div>
  );
};

export default SecondPage;
