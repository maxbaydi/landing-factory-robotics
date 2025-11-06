import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

const updateMetaTag = (selector: string, attribute: string, content: string) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    if (selector.includes('[name=')) {
      element.setAttribute('name', selector.match(/name=['"]([^'"]+)['"]/)?.[1] || '');
    } else if (selector.includes('[property=')) {
      element.setAttribute('property', selector.match(/property=['"]([^'"]+)['"]/)?.[1] || '');
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, content);
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.href = href;
};

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  useEffect(() => {
    const siteUrl = url || window.location.href;
    const defaultImage = image || '/main_hero.png';

    document.title = title;

    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);
    
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:image"]', 'content', defaultImage);
    updateMetaTag('meta[property="og:url"]', 'content', siteUrl);
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', defaultImage);
    
    updateMetaTag('meta[name="robots"]', 'content', 'index, follow');
    updateMetaTag('meta[name="googlebot"]', 'content', 'index, follow');
    updateMetaTag('meta[name="yandex"]', 'content', 'index, follow');
    
    updateLinkTag('canonical', siteUrl);
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;

