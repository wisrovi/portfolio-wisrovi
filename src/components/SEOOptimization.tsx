'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

// Componente para optimización SEO
const SEOOptimization = ({ 
  title = 'Wisrovi Rodriguez - Ingeniero MLOps & Especialista en IA',
  description = 'Experto en inteligencia artificial, visión por computadora y desarrollo de software. Especializado en MLOps y soluciones de IA para empresas.',
  keywords = 'Wisrovi Rodriguez, inteligencia artificial, visión artificial, MLOps, desarrollo de software, Python, Docker, wyoloservice',
  author = 'Wisrovi Rodriguez',
  type = 'website',
  image = '/images/wisrovi-profile.jpg',
  twitterHandle = '@wisrovi',
  canonicalUrl = '',
  structuredData = null
}) => {
  const pathname = usePathname();
  const [url, setUrl] = useState('');
  
  // Actualizar URL cuando cambia la ruta
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.origin + pathname);
    }
  }, [pathname]);
  
  // URL canónica
  const canonical = canonicalUrl || url;
  
  // Datos estructurados por defecto (Schema.org)
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Wisrovi Rodriguez',
    url: url,
    image: image,
    jobTitle: 'Ingeniero MLOps & Especialista en IA',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    sameAs: [
      'https://www.linkedin.com/in/wisrovi-rodriguez/',
      'https://github.com/wisrovi/',
      'https://hub.docker.com/search?q=wisrovi%20',
      'https://pypi.org/user/wisrovi/'
    ],
    description: description,
    knowsAbout: [
      'Inteligencia Artificial',
      'Visión Artificial',
      'MLOps',
      'Desarrollo de Software',
      'Python',
      'Docker',
      'Kafka',
      'MongoDB',
      'Redis',
      'PostgreSQL'
    ]
  };
  
  // Usar datos estructurados personalizados o los predeterminados
  const finalStructuredData = structuredData || defaultStructuredData;
  
  return (
    <>
      <Head>
        {/* Metadatos básicos */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Preconectar a dominios externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      {/* Datos estructurados Schema.org */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }}
      />
    </>
  );
};

export default SEOOptimization;
