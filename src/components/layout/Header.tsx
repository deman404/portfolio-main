import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/50 dark:bg-teal-900/50 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
              aria-label="Home"
            >
              <span className="text-teal-600 dark:text-teal-500">Ayman</span>
              Azhar
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  font-medium transition-colors relative
                  ${
                    location.pathname === item.href
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400"
                  }
                  ${
                    location.pathname === item.href
                      ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-teal-600 dark:after:bg-teal-400 after:transition-transform'
                      : ""
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/contact">
              <Button variant="primary" size="sm">
                <span>Let's Talk</span>
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-[72px] bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform overflow-hidden
          ${
            isMenuOpen
              ? "h-auto opacity-100 shadow-lg max-h-[80vh] overflow-y-auto"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="container mx-auto px-4 py-4 space-y-6">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  py-2 px-4 rounded-md font-medium transition-colors
                  ${
                    location.pathname === item.href
                      ? "text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-black"
                      : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link to="/contact" className="block w-full">
              <Button variant="primary" fullWidth>
                Let's Talk
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
