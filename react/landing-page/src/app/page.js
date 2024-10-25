import MainSection from './components/MainSection';
import Testimonial from './components/Testimonial';
import DiscoverPage from './components/Home';
import PaymentPlans from './components/List'; // Ensure this path is correct

export default function Home() {
  return (
    <div>
      <MainSection />
      <DiscoverPage />
      <Testimonial />
      <PaymentPlans />
    </div>
  );
}
