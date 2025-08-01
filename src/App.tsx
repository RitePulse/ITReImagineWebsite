import React, { useState, useEffect } from 'react';
import Website from './components/Website';
import ContactUs from './components/ContactUs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactUs />;
      default:
        return <Website />;
    }
  };

  return renderPage();
};

export default App;