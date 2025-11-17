# 🚢 ChineLogistique - Plateforme de Transport et Logistique Internationale

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Caractéristiques principales](#-caractéristiques-principales)
- [Stack technologique](#-stack-technologique)
- [Installation](#-installation-et-configuration)
- [Guide de développement](#-guide-de-développement)
- [Structure des fichiers](#-structure-des-fichiers)
- [Pages et routes](#-pages-et-routes)
- [Composants réutilisables](#-composants-réutilisables)
- [Intégration Supabase](#-intégration-supabase)
- [Déploiement](#-déploiement)
- [SEO et métadonnées](#-seo-et-métadonnées)
- [Sécurité](#-sécurité)
- [Dépannage](#-dépannage)

---

## 🎯 Vue d'ensemble

**ChineLogistique** est une plateforme web moderne de transport et logistique internationale spécialisée dans les expéditions depuis la Chine vers le monde entier (Afrique, Europe, Amérique du Nord, etc.).

### Objectifs principaux

- 📦 Offrir des solutions de transport multimodales (maritime, aérien, routier, ferroviaire)
- 🌍 Servir les marchés francophones (Cameroun, Côte d'Ivoire, Sénégal, RDC, Maroc, Belgique, Suisse, Canada, France)
- 🔍 Permettre le suivi en temps réel des expéditions
- 💼 Fournir un espace d'administration pour gérer les commandes
- 📱 Garantir une expérience utilisateur optimale sur tous les appareils
- 🚀 Assurer une performance maximale et un excellent référencement SEO

---

## ✨ Caractéristiques principales

### Pour les utilisateurs
- **Suivi de colis** : Système de suivi en temps réel avec numéro de commande
- **Devis en ligne** : Calcul automatique des tarifs selon le type de transport
- **Blog informatif** : Articles sur la logistique et les services
- **Réseau de partenaires** : Affichage des partenaires et points de service
- **Formulaire de contact** : Communication directe avec l'équipe
- **Design responsive** : Adaptation parfaite à tous les écrans

### Pour les administrateurs
- **Tableau de bord complet** : Gestion centralisée des commandes
- **Gestion des paramètres** : Configuration des tarifs et des services
- **Authentification sécurisée** : Système de login avec Supabase
- **Gestion des utilisateurs** : Création et modification des comptes
- **Historique des transactions** : Suivi complet des opérations

### Optimisations techniques
- **SEO avancé** : Balises meta, Open Graph, Twitter Cards, hreflang multilingues
- **Structured Data** : Schema.org pour meilleure indexation
- **Performance** : Optimisation des images, code splitting, lazy loading
- **Sécurité** : Headers de sécurité, protection CSRF, validation des données
- **Accessibilité** : Conformité WCAG, navigation au clavier

---

## 🛠️ Stack technologique

### Frontend

| Technologie | Version | Utilisation |
|-------------|---------|-------------|
| **React** | 18.3.1 | Framework UI principal |
| **React Router** | 7.9.3 | Routage et navigation |
| **TypeScript** | 5.5.3 | Typage statique |
| **Vite** | 5.4.2 | Build tool et dev server |
| **TailwindCSS** | 3.4.1 | Framework CSS utilitaire |
| **Lucide React** | 0.344.0 | Icônes SVG |
| **QRCode** | 1.5.4 | Génération de codes QR |

### Backend & Services

| Service | Version | Utilisation |
|---------|---------|-------------|
| **Supabase** | 2.57.4 | Backend as a Service (BaaS) |
| **PostgreSQL** | (Supabase) | Base de données |
| **Authentication** | (Supabase) | Gestion des utilisateurs |

### Outils de développement

| Outil | Version | Utilisation |
|------|---------|-------------|
| **ESLint** | 9.9.1 | Linting et qualité du code |
| **TypeScript ESLint** | 8.3.0 | Linting TypeScript |
| **PostCSS** | 8.4.35 | Traitement CSS |
| **Autoprefixer** | 10.4.18 | Préfixes CSS automatiques |

---

## 📦 Installation et configuration

### Prérequis

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0
- **Git** pour le contrôle de version
- Compte **Supabase** (gratuit)

### Étape 1 : Cloner le projet

```bash
git clone <repository-url>
cd project
```

### Étape 2 : Installer les dépendances

```bash
npm install
```

### Étape 3 : Configuration des variables d'environnement

```bash
cp .env.example .env
```

Remplissez les variables dans `.env` :

```env
VITE_SUPABASE_URL=https://jkgrtkldyzyllnensaym.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**Où trouver ces valeurs ?**
1. Allez sur [app.supabase.com](https://app.supabase.com)
2. Sélectionnez votre projet
3. Allez dans **Settings > API**
4. Copiez les clés

### Étape 4 : Démarrer le serveur de développement

```bash
npm run dev
```

L'application sera accessible à `http://localhost:5173`

---

## 🚀 Guide de développement

### Scripts disponibles

```bash
npm run dev           # Démarrer le serveur de développement
npm run build         # Construire pour la production
npm run preview       # Prévisualiser la build
npm run typecheck     # Vérifier les types TypeScript
npm run lint          # Linter le code
npm run lint -- --fix # Corriger automatiquement
```

### Workflow de développement

1. Créer une branche : `git checkout -b feature/ma-fonctionnalite`
2. Développer avec : `npm run dev`
3. Vérifier les types : `npm run typecheck`
4. Linter : `npm run lint`
5. Commiter et pousser

### Conventions de code

- **Nommage** : camelCase pour variables/fonctions, PascalCase pour composants
- **Imports** : Grouper (React, librairies externes, locaux)
- **Types** : Utiliser TypeScript partout
- **Commentaires** : Documenter les logiques complexes

---

## 📁 Structure des fichiers

### `/src/pages/` - Pages principales

| Fichier | Route |
|---------|-------|
| `Home.tsx` | `/` |
| `About.tsx` | `/about` |
| `Services.tsx` | `/services` |
| `Contact.tsx` | `/contact` |
| `Track.tsx` | `/track` |
| `Blog.tsx` | `/blog` |
| `Network.tsx` | `/network` |
| `Login.tsx` | `/login` |
| `Admin.tsx` | `/admin` |
| `TermsAndConditions.tsx` | `/terms-and-conditions` |

### `/src/components/` - Composants réutilisables

| Composant | Description |
|-----------|-------------|
| `Header.tsx` | En-tête avec navigation |
| `Footer.tsx` | Pied de page |
| `SEO.tsx` | Gestion des métadonnées SEO |
| `OrganizationSchema.tsx` | Données structurées Schema.org |
| `CounterAnimation.tsx` | Animation de compteurs |
| `Toast.tsx` | Notifications toast |

### `/src/hooks/` - Custom React Hooks

| Hook | Description |
|------|-------------|
| `useSiteSettings.ts` | Gestion des paramètres du site |

### `/public/` - Ressources statiques

```
public/
├── favicon.ico
├── icon.svg
├── logo*.png
├── apple-touch-icon*.png
├── android-chrome-*.png
├── site.webmanifest
└── robots.txt
```

---

## 🗺️ Pages et routes

```
/                           → Accueil
├── /about                  → À propos
├── /services               → Services
├── /contact                → Contact
├── /track                  → Suivi de colis
├── /blog                   → Blog
├── /network                → Réseau
├── /login                  → Connexion
├── /admin                  → Admin (protégé)
└── /terms-and-conditions   → Conditions
```

### Détails des pages principales

**Home** : Hero section, formulaire de suivi, services, statistiques, témoignages

**Services** : Transport maritime, aérien, routier, ferroviaire avec tarification

**Track** : Suivi en temps réel, historique du colis, estimation d'arrivée

**Admin** : Tableau de bord, gestion des commandes, utilisateurs, paramètres

**Blog** : Articles, catégories, moteur de recherche, partage réseaux sociaux

---

## 🧩 Composants réutilisables

### SEO

```tsx
import SEO from '../components/SEO';

export default function MyPage() {
  return (
    <>
      <SEO 
        title="Titre de la page"
        description="Description de la page"
        keywords="mot-clé1, mot-clé2"
        canonical="https://example.com/page"
      />
      {/* Contenu */}
    </>
  );
}
```

### CounterAnimation

```tsx
import CounterAnimation from '../components/CounterAnimation';

<CounterAnimation 
  end={1000}
  label="Clients satisfaits"
  duration={2000}
/>
```

### Toast

```tsx
import { Toast } from '../components/Toast';

{message && <Toast message={message} type="success" />}
```

---

## 🔗 Intégration Supabase

### Configuration

Le client Supabase est dans `/src/lib/supabase.ts` :

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Authentification

```typescript
// Connexion
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
});

// Déconnexion
await supabase.auth.signOut();

// Utilisateur actuel
const { data: { user } } = await supabase.auth.getUser();
```

### Requêtes de base de données

```typescript
// Lire
const { data } = await supabase
  .from('orders')
  .select('*')
  .eq('id', 123);

// Créer
const { data } = await supabase
  .from('orders')
  .insert([{ customer_name: 'John', status: 'pending' }]);

// Mettre à jour
const { data } = await supabase
  .from('orders')
  .update({ status: 'shipped' })
  .eq('id', 123);

// Supprimer
await supabase
  .from('orders')
  .delete()
  .eq('id', 123);
```

---

## 🚀 Déploiement

### Déploiement sur Vercel

#### Configuration automatique (recommandée)

1. Connectez votre repository GitHub à Vercel
2. Vercel détecte automatiquement Vite
3. Les variables d'environnement se configurent automatiquement

#### Configuration manuelle

```bash
npm install -g vercel
vercel
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel --prod
```

### Domaine personnalisé

1. Dashboard Vercel > Votre projet
2. **Settings > Domains**
3. Ajoutez votre domaine
4. Configurez les DNS records

### Monitoring

```bash
vercel logs              # Logs en temps réel
vercel logs --follow     # Suivi continu
```

---

## 🔍 SEO et métadonnées

### Optimisations implémentées

✅ Métadonnées de base (title, description, keywords)
✅ Open Graph (réseaux sociaux)
✅ Twitter Cards
✅ Hreflang multilingues (pays francophones)
✅ Données structurées Schema.org
✅ Canonical URLs
✅ Favicons multi-formats
✅ Web App Manifest
✅ Robots.txt et Sitemap.xml

### Checklist SEO

- ✅ Titles uniques (50-60 caractères)
- ✅ Descriptions uniques (150-160 caractères)
- ✅ Mots-clés pertinents
- ✅ Headings hiérarchisés (H1, H2, H3)
- ✅ Images avec alt text
- ✅ URLs lisibles
- ✅ Mobile-friendly
- ✅ Vitesse optimale

---

## 🔒 Sécurité

### Headers de sécurité

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### Bonnes pratiques

- ✅ Jamais commiter `.env` dans Git
- ✅ Utiliser `.env.example` pour documenter
- ✅ Préfixer les variables publiques avec `VITE_`
- ✅ Valider toutes les entrées utilisateur
- ✅ Utiliser HTTPS en production
- ✅ Implémenter les rôles et permissions
- ✅ Valider les tokens JWT

### Validation des données

```typescript
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateTrackingNumber = (number: string): boolean => {
  return /^[A-Z0-9]{10,}$/.test(number);
};
```

---

## 🐛 Dépannage

### Problèmes courants

**"Cannot find module '@supabase/supabase-js'"**
```bash
npm install @supabase/supabase-js
```

**"VITE_SUPABASE_URL is undefined"**
- Vérifier que `.env` existe
- Vérifier les noms des variables
- Redémarrer : `npm run dev`

**"Erreur d'authentification Supabase"**
- Vérifier la clé ANON_KEY
- Vérifier que le projet Supabase est actif
- Vérifier les paramètres CORS

**"Styles TailwindCSS ne s'appliquent pas"**
- Vérifier `tailwind.config.js`
- Vérifier que `index.css` importe les directives
- Redémarrer le serveur

**"Erreur de build Vite"**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Commandes de débogage

```bash
npm run typecheck        # Vérifier les types
npm run lint             # Linter le code
npm run build            # Tester la build
npm run preview          # Prévisualiser la build
```

---

## 📞 Support et contact

- **Email** : info@chinelogistique.com
- **Téléphone** : +85252089745
- **Adresse** : International Trade Center, Guangzhou, Guangdong, CN
- **Réseaux sociaux** : Facebook, Twitter, LinkedIn

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

## 👨‍💻 Contribution

Les contributions sont les bienvenues ! Veuillez :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commiter vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pousser vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 Changelog

### Version 0.0.0 (Initial)
- ✅ Configuration initiale du projet
- ✅ Setup React + TypeScript + Vite
- ✅ Intégration TailwindCSS
- ✅ Configuration Supabase
- ✅ Création des pages principales
- ✅ Composants réutilisables
- ✅ Optimisations SEO
- ✅ Configuration Vercel
- ✅ Headers de sécurité

---

**Créé avec ❤️ par l'équipe ChineLogistique**
