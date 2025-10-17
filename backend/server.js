// server.js
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // permite cualquier origen
app.use(express.json());

// Rutas
app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend (GET) 🚀" });
});

app.post("/api/datos", (req, res) => {
  const data = req.body;
  res.json({ recibido: true, data });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
