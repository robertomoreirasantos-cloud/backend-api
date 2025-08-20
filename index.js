import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const MESSAGE = process.env.API_MESSAGE || "Olá do backend!";
const VERSION = process.env.API_VERSION || "v1";

app.get("/api/hello", (req, res) => {
  res.json({ message: MESSAGE, version: VERSION, ts: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT} (version=${VERSION})`);
});
