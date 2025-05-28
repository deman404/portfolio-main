import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Update title on route change
const TitleUpdater: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = 'DevPortfolio';
    
    if (pathname === '/') {
      title = 'DevPortfolio | Home';
    } else if (pathname.startsWith('/projects') && pathname.length > 9) {
      title = 'DevPortfolio | Project Details';
    } else if (pathname === '/projects') {
      title = 'DevPortfolio | Projects';
    } else if (pathname === '/about') {
      title = 'DevPortfolio | About';
    } else if (pathname === '/contact') {
      title = 'DevPortfolio | Contact';
    } else {
      title = 'DevPortfolio | 404 Not Found';
    }
    
    document.title = title;
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleUpdater />
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;