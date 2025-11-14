import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillsSection from "./components/Sections/SkillsSection";

// Lazy load below-fold sections for better initial load performance
const ProjectsSection = lazy(() => import("./components/Sections/ProjectsSection"));
const AboutSection = lazy(() => import("./components/Sections/AboutSection"));
const ContactSection = lazy(() => import("./components/Sections/ContactSection"));
const Footer = lazy(() => import("./components/Sections/Footer"));

// Simple loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div>
        {/* Skip Navigation Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-500 focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <div id="home">
            <HeroSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>

          {/* Lazy loaded sections wrapped in Suspense */}
          <Suspense fallback={<SectionLoader />}>
            <div id="work">
              <ProjectsSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
