import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial'; // Import the Testimonial component
import { UserProvider } from '@/lib/context/user';

export const metadata = {
  title: 'AI club',
  description: 'AI Ally Landing Page built with Next.js',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <UserProvider>{children}</UserProvider>
        <Footer />
      </body>
    </html>
  );
}
