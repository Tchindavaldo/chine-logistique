export interface Country {
  code: string; // ISO-2
  name: string;
  lat: number;
  lng: number;
}

export const COUNTRIES: Country[] = [
  // Asie
  { code: 'CN', name: 'Chine', lat: 35.8617, lng: 104.1954 },
  { code: 'HK', name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
  { code: 'JP', name: 'Japon', lat: 36.2048, lng: 138.2529 },
  { code: 'KR', name: 'Corée du Sud', lat: 35.9078, lng: 127.7669 },
  { code: 'IN', name: 'Inde', lat: 20.5937, lng: 78.9629 },
  { code: 'AE', name: 'Émirats Arabes Unis', lat: 23.4241, lng: 53.8478 },
  { code: 'TR', name: 'Turquie', lat: 38.9637, lng: 35.2433 },
  { code: 'TH', name: 'Thaïlande', lat: 15.87, lng: 100.9925 },
  { code: 'VN', name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  // Afrique
  { code: 'CM', name: 'Cameroun', lat: 7.3697, lng: 12.3547 },
  { code: 'NG', name: 'Nigeria', lat: 9.082, lng: 8.6753 },
  { code: 'CI', name: 'Côte d\'Ivoire', lat: 7.54, lng: -5.5471 },
  { code: 'SN', name: 'Sénégal', lat: 14.4974, lng: -14.4524 },
  { code: 'GA', name: 'Gabon', lat: -0.8037, lng: 11.6094 },
  { code: 'CG', name: 'Congo', lat: -0.228, lng: 15.8277 },
  { code: 'CD', name: 'RD Congo', lat: -4.0383, lng: 21.7587 },
  { code: 'BJ', name: 'Bénin', lat: 9.3077, lng: 2.3158 },
  { code: 'TG', name: 'Togo', lat: 8.6195, lng: 0.8248 },
  { code: 'BF', name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { code: 'ML', name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { code: 'MA', name: 'Maroc', lat: 31.7917, lng: -7.0926 },
  { code: 'DZ', name: 'Algérie', lat: 28.0339, lng: 1.6596 },
  { code: 'TN', name: 'Tunisie', lat: 33.8869, lng: 9.5375 },
  { code: 'EG', name: 'Égypte', lat: 26.8206, lng: 30.8025 },
  { code: 'KE', name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { code: 'ZA', name: 'Afrique du Sud', lat: -30.5595, lng: 22.9375 },
  { code: 'GH', name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { code: 'GN', name: 'Guinée', lat: 9.9456, lng: -9.6966 },
  { code: 'MR', name: 'Mauritanie', lat: 21.0079, lng: -10.9408 },
  { code: 'TD', name: 'Tchad', lat: 15.4542, lng: 18.7322 },
  { code: 'CF', name: 'Centrafrique', lat: 6.6111, lng: 20.9394 },
  // Europe
  { code: 'FR', name: 'France', lat: 46.2276, lng: 2.2137 },
  { code: 'BE', name: 'Belgique', lat: 50.5039, lng: 4.4699 },
  { code: 'NL', name: 'Pays-Bas', lat: 52.1326, lng: 5.2913 },
  { code: 'DE', name: 'Allemagne', lat: 51.1657, lng: 10.4515 },
  { code: 'IT', name: 'Italie', lat: 41.8719, lng: 12.5674 },
  { code: 'ES', name: 'Espagne', lat: 40.4637, lng: -3.7492 },
  { code: 'GB', name: 'Royaume-Uni', lat: 55.3781, lng: -3.436 },
  // Amériques
  { code: 'US', name: 'États-Unis', lat: 37.0902, lng: -95.7129 },
  { code: 'CA', name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { code: 'BR', name: 'Brésil', lat: -14.235, lng: -51.9253 },
];

export function getCountry(code: string): Country | undefined {
  return COUNTRIES.find((c) => c.code === code);
}
