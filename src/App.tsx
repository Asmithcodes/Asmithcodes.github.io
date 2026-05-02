import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
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
import { SoftwareProjectsPage, HardwareProjectsPage } from './components/Pages/CategoryProjectsPage';
import SplashCursor from './components/UI/SplashCursor';
import { useSplashCursor } from './hooks/useSplashCursor';

function App() {
    const { isActive } = useSplashCursor();
    const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

    useEffect(() => {
        const onHashChange = () => setCurrentPath(window.location.hash || '#/');
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    // Ensure we snap to the top when navigating back to the main site from the projects page
    useEffect(() => {
        if (currentPath === '#/' || currentPath === '') {
            // Temporarily disable smooth scrolling to snap instantly to top
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            
            // Restore smooth scrolling behavior slightly after
            const timeout = setTimeout(() => {
                document.documentElement.style.scrollBehavior = 'smooth';
            }, 50);
            
            return () => clearTimeout(timeout);
        }
    }, [currentPath]);

    // Route for Software Projects Page
    if (currentPath === '#/software-projects') {
        return (
            <HelmetProvider>
                {isActive && <SplashCursor />}
                <CircuitGridBackground />
                <SoftwareProjectsPage />
            </HelmetProvider>
        );
    }

    // Route for Hardware Projects Page
    if (currentPath === '#/hardware-projects') {
        return (
            <HelmetProvider>
                {isActive && <SplashCursor />}
                <CircuitGridBackground />
                <HardwareProjectsPage />
            </HelmetProvider>
        );
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Asmith Pampana | Portfolio</title>
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
