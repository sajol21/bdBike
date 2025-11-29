import React from 'react';
import Hero from '../components/Hero';
import PriceOverview from '../components/PriceOverview';
import CCSegment from '../components/CCSegment';
import NewModels from '../components/NewModels';
import NewsUpdate from '../components/NewsUpdate';
import BuyingGuide from '../components/BuyingGuide';
import KnowledgeBase from '../components/KnowledgeBase';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hero Bike Price in Bangladesh 2024 - 2025 | bdBike Official Guide"
        description="Discover the latest Hero bike price in Bangladesh 2024 & 2025. Detailed list of Hero 125cc bike prices, new models, and expert guides on choosing bike size and maintenance."
        keywords="hero bike price in bangladesh, hero bike price in bangladesh 2024, hero bike price in bangladesh 2025, hero 125cc bike price in bangladesh, hero new bike price in bangladesh"
      />
      <Hero />
      <NewsUpdate />
      <PriceOverview />
      <CCSegment />
      <NewModels />
      <BuyingGuide />
      <KnowledgeBase />
    </>
  );
};

export default Home;