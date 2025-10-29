
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Shop from './components/Shop';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Shop />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
