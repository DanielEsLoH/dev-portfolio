import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import FocusTrap from "focus-trap-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const sections = ["home", "skills", "work", "about", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset from top of viewport

      // Find current section based on scroll position
      let current = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    // Set initial active section
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Re-check after delays for lazy-loaded sections
    const timeout1 = setTimeout(handleScroll, 500);
    const timeout2 = setTimeout(handleScroll, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Code2 size={24} className="text-blue-500" />{" "}
          <span
            className={`text-lg ml-1 ${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Time to program
          </span>
        </motion.div>

        {/*Desktop Navigagtion*/}
        <div className="hidden md:flex items-center space-x-2">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{ cursor: "pointer" }}
                className={`relative px-4 py-2 text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                  isActive
                    ? isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {/* Animated background pill */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className={`absolute inset-0 rounded-full ${
                      isDarkMode
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                        : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.button>
            );
          })}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </motion.button>
        </div>

        {/*Mobile Menu Button*/}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </motion.button>
        </div>
      </div>

      {/*Mobile Menu*/}
      <AnimatePresence>
        {isMenuOpen && (
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              allowOutsideClick: true,
            }}
          >
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden mt-4 p-4 rounded-lg ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
              role="navigation"
              aria-label="Mobile navigation menu"
            >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative block w-full text-left px-4 py-3 text-sm uppercase tracking-wider rounded-lg transition-all duration-300 ${
                    isActive
                      ? isDarkMode
                        ? "text-white"
                        : "text-gray-900"
                      : isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {/* Animated background for mobile */}
                  {isActive && (
                    <motion.div
                      layoutId="mobile-navbar-pill"
                      className={`absolute inset-0 rounded-lg ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                          : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    {/* Active indicator icon */}
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shadow-lg shadow-blue-500/50"
                      />
                    )}
                    {item}
                  </span>
                </motion.button>
              );
            })}
            </motion.div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
