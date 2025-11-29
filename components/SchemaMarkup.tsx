import React from 'react';
import { bikeData } from '../data';

const SchemaMarkup: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Hero bike price in Bangladesh 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Hero bike price in Bangladesh 2024 ranges from ৳1,14,000 for the Splendor+ to over ৳2,14,000 for the Thriller 160R."
        }
      },
      {
        "@type": "Question",
        "name": "How to choose a bike size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To choose a bike size, ensure your feet can touch the ground flat when seated. For 5'0\"-5'5\" riders, a seat height of 780mm is ideal."
        }
      },
      {
        "@type": "Question",
        "name": "What is ABS in bike?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABS stands for Anti-lock Braking System. It prevents wheels from locking up during sudden braking, preventing skids."
        }
      }
    ]
  };

  const productSchema = bikeData.map(bike => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": bike.name,
    "image": bike.image,
    "description": `Buy ${bike.name} in Bangladesh. ${bike.cc} engine with ${bike.mileage} mileage.`,
    "brand": {
      "@type": "Brand",
      "name": "Hero MotoCorp"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://bdbike.demo",
      "priceCurrency": "BDT",
      "price": bike.price2024.replace(/[^0-9]/g, ''),
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "bdBike",
    "url": "https://bdbike.demo",
    "logo": "https://picsum.photos/id/191/100/100",
    "sameAs": [
      "https://www.facebook.com/hero",
      "https://twitter.com/hero"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;