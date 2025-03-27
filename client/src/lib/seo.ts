import { Helmet } from "react-helmet";
import { seoData } from "@/data";

// Create SEO component properties interface
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
}

// Generate SEO tags for a page
export const generateSEO = ({
  title = seoData.title,
  description = seoData.description,
  keywords = seoData.keywords,
  ogTitle = seoData.og.title,
  ogDescription = seoData.og.description,
  ogUrl = seoData.og.url,
  ogType = seoData.og.type,
  canonicalUrl = seoData.og.url,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags for social sharing */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default generateSEO;
