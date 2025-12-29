import { HelmetProvider, Helmet } from 'react-helmet-async';
import { CircuitGridBackground } from './components/Background/CircuitGridBackground';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Projects } from './components/Sections/Projects';
import { Skills } from './components/Sections/Skills';
import { Experience } from './components/Sections/Experience';
import { Education } from './components/Sections/Education';
import { Contact } from './components/Sections/Contact';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Asmith Pampana | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Asmith Pampana - Software-focused ECE student building functional web applications and system prototypes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>

      {/* Animated Background */}
      <CircuitGridBackground />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </HelmetProvider>
  );
}

export default App;
