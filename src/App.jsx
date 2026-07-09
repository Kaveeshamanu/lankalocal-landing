import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experiences from './components/Experiences';
import Guides from './components/Guides';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Experiences />
        <Guides />
      </main>
      <Footer />
    </div>
  );
}

export default App;
