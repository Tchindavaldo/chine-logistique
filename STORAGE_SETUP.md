# Configuration du Storage Supabase

## 📦 Créer le Bucket pour les Images

Pour que l'upload d'images fonctionne, vous devez créer un bucket dans Supabase Storage :

### Étapes :

1. Allez sur [app.supabase.com](https://app.supabase.com)
2. Ouvrez votre projet
3. Cliquez sur **Storage** (📦) dans le menu à gauche
4. Cliquez sur **New bucket**
5. Remplissez :
   - **Name** : `shipment-images`
   - **Public bucket** : ✅ Cochez cette case (pour que les images soient accessibles publiquement)
6. Cliquez sur **Create bucket**

### Configuration des politiques (Policies)

Après avoir créé le bucket, configurez les politiques d'accès :

1. Cliquez sur le bucket `shipment-images`
2. Allez dans l'onglet **Policies**
3. Cliquez sur **New Policy**

#### Politique 1 : Upload (INSERT)
- **Policy name** : `Authenticated users can upload images`
- **Allowed operation** : `INSERT`
- **Target roles** : `authenticated`
- **Policy definition** : `true` (ou laissez vide pour autoriser tout)

#### Politique 2 : Lecture publique (SELECT)
- **Policy name** : `Public can view images`
- **Allowed operation** : `SELECT`
- **Target roles** : `anon`, `authenticated`
- **Policy definition** : `true`

### ✅ Terminé !

Votre bucket est maintenant configuré et prêt à recevoir des images d'envois.
