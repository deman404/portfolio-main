import React from 'react';
import { Link } from 'react-router-dom';
import * as icons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="text-teal-600 dark:text-teal-500">Ayman</span>Azhar
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Crafting exceptional digital experiences through innovative design and development.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <icons.Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <icons.Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <icons.Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                aria-label="Email"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
              >
                <icons.Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Web Development', 
                'Mobile Applications', 
                'UI/UX Design', 
                'Data Visualization',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 dark:text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-500 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;