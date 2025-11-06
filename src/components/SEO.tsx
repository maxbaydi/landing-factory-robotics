import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  const siteUrl = url || window.location.href;
  const defaultImage = image || '/main_hero.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="yandex" content="index, follow" />
      
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;

