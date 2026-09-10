# NG Cash - Transfert d'Argent

Bienvenue sur le projet NG Cash !
Il s'agit d'une application **100% statique (frontend uniquement)** développée avec React et Vite.

L'application ne nécessite aucun backend pour fonctionner :
- Le calculateur de frais effectue les calculs dynamiquement côté client.
- Les soumissions de formulaires (contact, livraison) génèrent directement des liens vers WhatsApp.

Cela permet d'héberger le site de manière totalement gratuite (par exemple sur Vercel, Netlify, ou GitHub Pages), sans risque de latence ou de "mise en veille" qu'imposerait un serveur backend gratuit.

## 🚀 Lancer le projet en local

1. **Aller dans le dossier client**
   ```bash
   cd client
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

Le site sera accessible par défaut sur `http://localhost:5173`.

## 📦 Générer la version de production

Pour créer les fichiers statiques optimisés pour le déploiement, exécutez dans le dossier `client` :
```bash
npm run build
```
Les fichiers générés se trouveront dans le dossier `dist/`. Ce dossier peut être hébergé sur n'importe quel service d'hébergement web.
