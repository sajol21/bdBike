import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (selector: string, content: string, name?: string, property?: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Tags
    updateMeta('meta[name="description"]', description, 'description');
    if (keywords) {
      updateMeta('meta[name="keywords"]', keywords, 'keywords');
    }

    // Update Open Graph Tags
    updateMeta('meta[property="og:title"]', title, undefined, 'og:title');
    updateMeta('meta[property="og:description"]', description, undefined, 'og:description');
    updateMeta('meta[property="og:url"]', window.location.href, undefined, 'og:url');

  }, [title, description, keywords]);

  return null;
};

export default SEO;