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
        <Navbar />
        <HeroSection />
        <SkillsSection />

        {/* Lazy loaded sections wrapped in Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
