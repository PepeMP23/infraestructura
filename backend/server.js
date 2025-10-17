// Importar dependencias
const express = require("express");
const cors = require("cors");

// Crear app
const app = express();

// Middleware
app.use(cors({ origin: "*" })); // Permitir cualquier origen
app.use(express.json()); // Para recibir JSON

// Rutas
app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend (GET) 🚀" });
});

app.post("/api/datos", (req, res) => {
  const data = req.body;
  res.json({ recibido: true, data });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
