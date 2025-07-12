# Application de Gestion des Clients

Une application web backend moderne développée avec **Express.js** pour gérer une liste de clients via une API REST JSON.

## Démarrage rapide

```bash
# Installation
npm install

# Démarrage
npm start

# Ouvrir dans le navigateur
http://localhost:3000
```

## Design Premium

- **Glassmorphism** : Effets de transparence et de flou sophistiqués
- **Micro-animations** : Transitions fluides et feedback visuel
- **Icônes SVG** : Icônes vectorielles optimisées et animées
- **Responsive** : Design mobile-first complet avec accessibilité

## API REST

| Méthode  | Endpoint           | Description         |
| -------- | ------------------ | ------------------- |
| `GET`    | `/api/clients`     | Liste des clients   |
| `POST`   | `/api/clients`     | Ajouter un client   |
| `DELETE` | `/api/clients/:id` | Supprimer un client |

### Format Client

```json
{
  "id": 1,
  "name": "BENIE SYLVESTRE",
  "email": "sylvestrebenie7829@gmail.com",
  "phone": "+225 01 52 34 31 11"
}
```

## Tests cURL

```bash
# Récupérer tous les clients
curl http://localhost:3000/api/clients

# Ajouter un client
curl -X POST -H "Content-Type: application/json" \
  -d '{"name": "BENIE SYLVESTRE", "email": "sylvestrebenie7829@gmail.com"}' \
  http://localhost:3000/api/clients

# Supprimer un client
curl -X DELETE http://localhost:3000/api/clients/1
```

## Structure

```
.
├── server.js          # Serveur Express
├── package.json       # Dépendances
├── public/            # Fichiers statiques
│   ├── index.html     # Accueil
│   ├── clients.html   # Gestion clients
│   ├── about.html     # À propos
│   └── style.css      # Styles premium
└── README.md
```

## Technologies

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Design**: Glassmorphism, CSS Grid, Animations
- **Stockage**: Mémoire (tableau JavaScript)

## Fonctionnalités

- ✅ API REST complète (GET, POST, DELETE)
- ✅ Interface moderne
- ✅ Micro-animations et effets de hover
- ✅ Icônes SVG optimisées
- ✅ Design responsive et accessible
- ✅ Formulaire avec validation visuelle
- ✅ Gestion d'erreurs complète

## 👨‍💻 Auteur

**BENIE SYLVESTRE** - Code Challenge Node.js

---

**Prêt !** Ouvrez `http://localhost:3000` pour commencer.
