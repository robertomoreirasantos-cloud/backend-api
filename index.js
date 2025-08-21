const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// rota simples de teste
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend API!" });
});

// rota de produtos
app.get("/api/products", (req, res) => {
  const filePath = path.join(__dirname, "products.json");
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(data);
    res.json(products);
  } catch (err) {
    console.error("Erro ao ler products.json:", err);
    res.status(500).json({ error: "Erro ao carregar os produtos" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
