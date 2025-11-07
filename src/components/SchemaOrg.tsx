interface SchemaOrgProps {
  type: 'Organization' | 'Product' | 'WebPage';
  data: any;
}

const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name || 'Comet Forward Intelligent Technology',
          url: data.url || window.location.origin,
          logo: data.logo || `${window.location.origin}/logo.png`,
          description: data.description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: data.addressLocality,
            addressRegion: data.addressRegion,
            addressCountry: data.addressCountry,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.telephone,
            contactType: 'customer service',
            email: data.email,
          },
        };

      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.name,
          description: data.description,
          image: data.image,
          brand: {
            '@type': 'Brand',
            name: data.brand || 'Comet Forward',
          },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'RUB',
          },
        };

      case 'WebPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: data.name,
          description: data.description,
          url: data.url,
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrg;


