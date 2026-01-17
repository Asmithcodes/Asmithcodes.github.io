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
import SplashCursor from './components/UI/SplashCursor';
import { useSplashCursor } from './hooks/useSplashCursor';

function App() {
  const { isActive } = useSplashCursor();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Asmith Pampana | Creative Technologist & Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Asmith Pampana - Creative Technologist and Full-Stack Developer specializing in building innovative web applications, interactive experiences, and system prototypes with modern technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asmithcodes.github.io/" />
        <meta property="og:title" content="Asmith Pampana | Creative Technologist & Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Asmith Pampana - Creative Technologist and Full-Stack Developer specializing in building innovative web applications and interactive experiences." />
        <meta property="og:image" content="https://asmithcodes.github.io/AsmithPhoto.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://asmithcodes.github.io/" />
        <meta property="twitter:title" content="Asmith Pampana | Creative Technologist & Full-Stack Developer" />
        <meta property="twitter:description" content="Portfolio of Asmith Pampana - Creative Technologist and Full-Stack Developer specializing in building innovative web applications and interactive experiences." />
        <meta property="twitter:image" content="https://asmithcodes.github.io/AsmithPhoto.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>

      {/* Easter Egg: Splash Cursor Effect (Type 'asmith' to activate) */}
      {isActive && <SplashCursor />}

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
