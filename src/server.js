const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const profileRoutes = require("./routes/profileRoutes");
const technologyRoutes = require("./routes/technologyRoutes");
const projectRoutes = require("./routes/projectRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/profiles", profileRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/projects", projectRoutes);
app.get("/", (req, res) => {
  res.json({ mensagem: "DevShowcase API funcionando!" });
});
app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada."
  });
});
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    erro: "Erro interno do servidor."
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`DevShowcase API executando na porta ${PORT}`);
});