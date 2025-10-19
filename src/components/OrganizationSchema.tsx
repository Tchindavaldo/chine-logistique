import { useEffect } from 'react';

/**
 * Composant pour ajouter les métadonnées Schema.org Organization
 * Permet à Google d'afficher le logo de l'entreprise dans les résultats de recherche
 */
export default function OrganizationSchema() {
  useEffect(() => {
    // Supprimer le script existant s'il y en a un
    const existingScript = document.querySelector('#organization-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Créer les métadonnées structurées pour l'organisation
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ChineLogistique",
      "alternateName": "Chine Logistique",
      "url": "https://chinelogistique.com",
      "logo": "https://chinelogistique.com/logo.svg",
      "image": "https://chinelogistique.com/logo.svg",
      "description": "ChineLogistique est votre partenaire de confiance pour le transport et la logistique internationale depuis la Chine. Solutions de fret maritime, aérien, routier et ferroviaire avec suivi en temps réel.",
      "email": "info@chinelogistique.com",
      "telephone": "+85252089745",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "International Trade Center",
        "addressLocality": "Guangzhou",
        "addressRegion": "Guangdong",
        "postalCode": "510000",
        "addressCountry": "CN"
      },
      "sameAs": [
        "https://www.facebook.com/chinelogistique",
        "https://www.twitter.com/chinelogistique",
        "https://www.linkedin.com/company/chinelogistique",
        "https://www.instagram.com/chinelogistique"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+85252089745",
          "contactType": "customer service",
          "areaServed": ["CM", "CN", "FR", "SN", "CI"],
          "availableLanguage": ["French", "English", "Chinese"]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1250"
      },
      "foundingDate": "1963",
      "slogan": "Votre Partenaire Logistique de Confiance"
    };

    // Créer et ajouter le script au <head>
    const script = document.createElement('script');
    script.id = 'organization-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    document.head.appendChild(script);

    // Cleanup lors du démontage du composant
    return () => {
      const scriptToRemove = document.querySelector('#organization-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
