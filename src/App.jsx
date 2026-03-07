import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Promise from './components/Promise';
import Coverage from './components/Coverage';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Promise />
      <Coverage />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}
