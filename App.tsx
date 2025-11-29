import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PriceList from './pages/PriceList';
import Level125 from './pages/Level125';
import NewModelsPage from './pages/NewModelsPage';
import GuidePage from './pages/GuidePage';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/prices':
        return <PriceList />;
      case '#/125cc':
        return <Level125 />;
      case '#/new-models':
        return <NewModelsPage />;
      case '#/guide':
        return <GuidePage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-hero-red selection:text-white">
      <SchemaMarkup />
      <Navbar />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;