# 🏢 Application de Gestion des Clients

Une mini application web backend développée avec **Express.js** pour gérer une liste de clients via une API REST JSON.

## 🎯 Objectif

Construire une application web backend permettant de :

- Gérer une liste de clients via une API REST JSON (GET, POST, DELETE)
- Servir des pages HTML statiques (accueil, liste des clients, à propos)
- Tester le projet directement depuis un navigateur et via curl en ligne de commande

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le projet**

   ```bash
   git clone <repository-url>
   cd c2-backend-semaine1-codechallenge-1306BENIE
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Démarrer le serveur**

   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du projet

```
.
├── server.js          # Serveur Express principal
├── package.json       # Dépendances et scripts
├── public/            # Fichiers statiques
│   ├── index.html     # Page d'accueil
│   ├── clients.html   # Gestion des clients
│   ├── about.html     # Page à propos
│   └── style.css      # Styles CSS
└── README.md          # Documentation
```

## 🌐 Pages disponibles

- **Accueil** (`/`) - Page d'accueil avec présentation de l'application
- **Clients** (`/clients`) - Interface de gestion des clients avec formulaire et liste
- **À propos** (`/about`) - Documentation et informations sur l'API

## 🔌 API REST

### Endpoints disponibles

| Méthode  | Endpoint           | Description                            |
| -------- | ------------------ | -------------------------------------- |
| `GET`    | `/api/clients`     | Récupère la liste complète des clients |
| `POST`   | `/api/clients`     | Ajoute un nouveau client               |
| `DELETE` | `/api/clients/:id` | Supprime un client par son ID          |

### Format des données

#### Client

```json
{
  "id": 1,
  "name": "Jean Dupont",
  "email": "jean.dupont@email.com",
  "phone": "0123456789"
}
```

#### Ajout d'un client (POST)

```json
{
  "name": "Jean Dupont",
  "email": "jean.dupont@email.com",
  "phone": "0123456789" // Optionnel
}
```

## 🧪 Tests avec cURL

### Récupérer tous les clients

```bash
curl http://localhost:3000/api/clients
```

### Ajouter un nouveau client

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "phone": "0123456789"}' \
  http://localhost:3000/api/clients
```

### Supprimer un client

```bash
curl -X DELETE http://localhost:3000/api/clients/1
```

## ⚠️ Gestion des erreurs

### Erreur 400 - Bad Request

Lorsqu'un POST ne contient pas les champs requis (`name` ou `email`) :

```json
{
  "error": "Les champs name et email sont requis"
}
```

### Erreur 404 - Not Found

Lorsqu'un DELETE vise un ID inexistant :

```json
{
  "error": "Client non trouvé"
}
```

## 🛠️ Technologies utilisées

- **Backend**: Node.js avec Express.js
- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Stockage**: Mémoire (tableau JavaScript)
- **API**: REST JSON

## 📋 Fonctionnalités

### ✅ Implémentées

- [x] API REST complète (GET, POST, DELETE)
- [x] Pages HTML statiques servies par Express
- [x] Interface utilisateur moderne et responsive
- [x] Formulaire d'ajout de clients
- [x] Liste dynamique des clients
- [x] Suppression de clients avec confirmation
- [x] Gestion des erreurs HTTP appropriée
- [x] Validation des données côté serveur
- [x] Messages de feedback utilisateur
- [x] Design responsive pour mobile

### 🎨 Interface utilisateur

- Design moderne avec gradients et animations
- Navigation intuitive
- Formulaires bien structurés
- Messages de confirmation/erreur
- Responsive design pour tous les écrans

## 🔧 Scripts disponibles

```bash
npm start    # Démarre le serveur en mode production
npm run dev  # Démarre le serveur en mode développement avec nodemon
```

## 📝 Notes de développement

- Les données sont stockées en mémoire (tableau JavaScript)
- L'application redémarre avec des données de démonstration
- Tous les IDs sont générés automatiquement
- Validation côté client et serveur
- Gestion d'erreurs complète

## 👨‍💻 Auteur

**1306BENIE** - Développé dans le cadre du Code Challenge Node.js

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

---

**🚀 Prêt à utiliser !** Ouvrez votre navigateur sur `http://localhost:3000` pour commencer à gérer vos clients.
