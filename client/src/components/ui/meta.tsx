import { Helmet } from 'react-helmet';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: object;
}

const defaultTitle = "Massachusetts Police Accreditation Solutions | Expert Consulting & Support";
const defaultDescription = "MPAS helps Massachusetts police departments achieve and maintain accreditation through specialized consulting, training, policy development, and ongoing support services.";
const defaultKeywords = "police accreditation, Massachusetts police accreditation, law enforcement standards, police consulting, MPCCJ, accreditation process, police department consultation, police policy development";
const defaultOgUrl = "https://mpas.boston/";
const defaultOgImage = "https://mpas.boston/images/mpas-og-image.jpg";

// Default structured data schema for the organization
const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Massachusetts Police Accreditation Solutions",
  "alternateName": "MPAS",
  "description": "Specialized consulting services to help law enforcement agencies across Massachusetts achieve and maintain accreditation standards.",
  "url": "https://mpas.boston/",
  "logo": "https://mpas.boston/images/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/massachusetts-police-accreditation-solutions/",
    "https://www.facebook.com/masspoliceaccreditation/",
    "https://twitter.com/MassPoliceCred"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "postalCode": "02108",
    "addressCountry": "US"
  },
  "telephone": "+16175551234",
  "email": "info@mpas.boston",
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
  "areaServed": {
    "@type": "State",
    "name": "Massachusetts"
  },
  "priceRange": "$$"
};

const Meta = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
  ogUrl = defaultOgUrl,
  schema = defaultSchema,
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Massachusetts Police Accreditation Solutions" />
      <meta http-equiv="content-language" content="en-us" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Massachusetts Police Accreditation Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@MassPoliceCred" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />

      {/* Favicon tags */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default Meta;
