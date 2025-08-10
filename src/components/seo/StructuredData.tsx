import Script from 'next/script';

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jayannacleaningservice.com.au",
    "name": "Jay & Anna Cleaning Service",
    "alternateName": "Jay & Anna Cleaners Sydney",
    "url": "https://jayannacleaningservice.com.au",
    "telephone": "+61474724805",
    "email": "contact@jayannacleaningservice.com.au",
    "description": "Professional cleaning services in Sydney offering house cleaning, office cleaning, window cleaning, deep cleaning and regular cleaning services across South and South-Western Sydney areas.",
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW", 
      "addressCountry": "AU",
      "postalCode": "2000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8688,
      "longitude": 151.2093
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Liverpool",
        "containedIn": "NSW, Australia"
      },
      {
        "@type": "City", 
        "name": "Campbelltown",
        "containedIn": "NSW, Australia"
      },
      {
        "@type": "City",
        "name": "Bankstown", 
        "containedIn": "NSW, Australia"
      },
      {
        "@type": "City",
        "name": "Fairfield",
        "containedIn": "NSW, Australia" 
      },
      {
        "@type": "City",
        "name": "Hurstville",
        "containedIn": "NSW, Australia"
      },
      {
        "@type": "City",
        "name": "Canterbury",
        "containedIn": "NSW, Australia"
      }
    ],
    "serviceType": [
      "House Cleaning",
      "Office Cleaning", 
      "Window Cleaning",
      "Deep Cleaning",
      "Regular Cleaning",
      "Strata Cleaning",
      "Commercial Cleaning"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Cleaning Service",
            "description": "Professional residential cleaning services for homes and apartments"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Office Cleaning Service",
            "description": "Commercial cleaning services for offices and business premises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Window Cleaning Service",
            "description": "Professional window cleaning for residential and commercial properties"
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00", 
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/jayannacleaningservice",
      "https://www.instagram.com/jayannacleaningservice"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jay & Anna Cleaning Service Sydney",
    "url": "https://jayannacleaningservice.com.au",
    "description": "Professional cleaning services in Sydney",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jayannacleaningservice.com.au/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jay & Anna Cleaning Service",
    "url": "https://jayannacleaningservice.com.au",
    "logo": "https://jayannacleaningservice.com.au/logo/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61474724805",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    }
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  );
}