const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend 🚀" });
});

app.post("/api/datos", (req, res) => {
  res.json({ recibido: true, data: req.body });
});

// Puerto dinámico (Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor en puerto ${PORT}`));
