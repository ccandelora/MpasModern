import { Helmet } from 'react-helmet';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const defaultTitle = "Massachusetts Police Accreditation Solutions | Expert Consulting & Support";
const defaultDescription = "MPAS provides specialized police accreditation consulting services to help law enforcement agencies across Massachusetts achieve and maintain accreditation standards.";
const defaultKeywords = "police accreditation, Massachusetts police, law enforcement standards, police consulting, MPCCJ, accreditation process";
const defaultOgUrl = "https://mpas.boston/";

const Meta = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage,
  ogUrl = defaultOgUrl,
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default Meta;
