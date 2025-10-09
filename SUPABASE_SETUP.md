# Configuration Supabase pour le Projet

## 📋 Prérequis

Vous avez déjà un projet Supabase avec l'URL de connexion:
- **Host**: `db.jkgrtkldyzyllnensaym.supabase.co`
- **Database**: `postgres`
- **Port**: `5432`

## 🔧 Configuration

### 1. Obtenir vos identifiants Supabase

1. Connectez-vous à [Supabase Dashboard](https://app.supabase.com)
2. Sélectionnez votre projet
3. Allez dans **Settings** > **API**
4. Copiez les informations suivantes:
   - **Project URL**: `https://jkgrtkldyzyllnensaym.supabase.co`
   - **Anon/Public Key**: La clé publique (commence généralement par `eyJ...`)

### 2. Configurer les variables d'environnement

1. Copiez le fichier `.env.example` vers `.env`:
   ```bash
   cp .env.example .env
   ```

2. Modifiez le fichier `.env` avec vos vraies valeurs:
   ```env
   VITE_SUPABASE_URL=https://jkgrtkldyzyllnensaym.supabase.co
   VITE_SUPABASE_ANON_KEY=votre_clé_anon_ici
   ```

### 3. Exécuter les migrations de base de données

Vous avez deux options pour créer les tables dans votre base de données:

#### Option A: Via l'interface Supabase (Recommandé)

1. Allez dans votre projet Supabase
2. Cliquez sur **SQL Editor** dans le menu latéral
3. Ouvrez le fichier `supabase/migrations/20251008113551_create_shipments_table.sql`
4. Copiez tout le contenu SQL
5. Collez-le dans l'éditeur SQL de Supabase
6. Cliquez sur **Run** pour exécuter la migration

#### Option B: Via Supabase CLI

Si vous avez Supabase CLI installé:

```bash
# Installer Supabase CLI (si pas déjà installé)
npm install -g supabase

# Se connecter à votre projet
supabase link --project-ref jkgrtkldyzyllnensaym

# Exécuter les migrations
supabase db push
```

### 4. Vérifier la connexion

Après avoir configuré votre `.env`, démarrez l'application:

```bash
npm run dev
```

L'application devrait maintenant se connecter à votre base de données Supabase!

## 📊 Structure de la Base de Données

La migration crée une table `shipments` avec les champs suivants:

- **Informations de suivi**: tracking_number, status, carrier, carrier_reference
- **Localisation**: origin, destination
- **Détails de l'envoi**: product, type_of_shipment, quantity, weight
- **Paiement**: payment_mode, shipment_mode, total_freight
- **Dates**: expected_delivery_date, departure_date, departure_time, delivery_time
- **Expéditeur**: shipper_name, shipper_phone, shipper_email, shipper_address
- **Destinataire**: receiver_name, receiver_phone, receiver_email, receiver_address
- **Autres**: comment, image_url, package_description

## 🔐 Sécurité

La table utilise Row Level Security (RLS) avec les politiques suivantes:
- ✅ **Lecture publique**: Tout le monde peut consulter les envois (pour le tracking)
- ✅ **Écriture authentifiée**: Seuls les utilisateurs authentifiés peuvent créer/modifier des envois

## 🆘 Dépannage

### Erreur: "Invalid API key"
- Vérifiez que vous avez copié la bonne clé anon depuis le dashboard Supabase
- Assurez-vous qu'il n'y a pas d'espaces au début ou à la fin de la clé

### Erreur: "relation 'shipments' does not exist"
- La migration n'a pas été exécutée. Suivez l'étape 3 ci-dessus

### Problème de connexion
- Vérifiez que l'URL Supabase est correcte
- Assurez-vous que votre projet Supabase est actif

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
