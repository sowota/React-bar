
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero/index';
import About from './components/About';
import Special from './components/Special/index';
import Chef from './components/Chef';
import Video from './components/Video';
import Awards from './components/Awards';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/index';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact/index';

function App() {
  return (
    <div className="relative w-screen overflow-hidden">
      <Nav/>
      <Hero />
      <About />
      <Special />
      <Chef/>
      <Video/>
      <Awards/>
      <Gallery/>
      <Contact/>
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
