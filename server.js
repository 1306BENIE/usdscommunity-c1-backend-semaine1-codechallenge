const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Servir les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, "public")));

// Stockage en mémoire des clients
let clients = [
  {
    id: 1,
    name: "BENIE SYLVESTRE",
    email: "benie.sylvestre@gmail.com",
    phone: "+225 01 52 34 31 11",
  },
  {
    id: 2,
    name: "N'ZIAN KOUABRAN ANDERSON",
    email: "nzian.kouabran@gmail.com",
    phone: "+225 0161511625",
  },
];

let nextId = 3;

// Routes pour les pages HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/clients", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "clients.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// API REST pour la gestion des clients

// GET /api/clients - Récupérer tous les clients
app.get("/api/clients", (req, res) => {
  res.json(clients);
});

// POST /api/clients - Ajouter un nouveau client
app.post("/api/clients", (req, res) => {
  const { name, email, phone } = req.body;

  // Validation des champs requis
  if (!name || !email) {
    return res.status(400).json({
      error: "Les champs noms et email sont requis",
    });
  }

  // Créer un nouveau client
  const newClient = {
    id: nextId++,
    name,
    email,
    phone: phone || "",
  };

  clients.push(newClient);

  res.status(201).json(newClient);
});

// DELETE /api/clients/:id - Supprimer un client
app.delete("/api/clients/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  const clientIndex = clients.findIndex((client) => client.id === clientId);

  if (clientIndex === -1) {
    return res.status(404).json({
      error: "Client non trouvé",
    });
  }

  const deletedClient = clients.splice(clientIndex, 1)[0];
  res.json({ message: "Client supprimé avec succès", client: deletedClient });
});

// Gestion des erreurs 404 pour les routes non trouvées
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📁 Pages disponibles:`);
  console.log(`   - Accueil: http://localhost:${PORT}/`);
  console.log(`   - Clients: http://localhost:${PORT}/clients`);
  console.log(`   - À propos: http://localhost:${PORT}/about`);
  console.log(`🔌 API REST:`);
  console.log(`   - GET /api/clients - Liste des clients`);
  console.log(`   - POST /api/clients - Ajouter un client`);
  console.log(`   - DELETE /api/clients/:id - Supprimer un client`);
});
