// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/markets', async (req, res) => {
  try {
    // Appeler l'API officielle de ParaDex
    const response = await fetch('https://api.prod.paradex.trade/v1/markets');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Erreur API:', err.message);
    res.status(500).json({ error: 'Impossible de charger les marchés' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});