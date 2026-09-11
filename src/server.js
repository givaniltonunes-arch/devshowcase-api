const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const profileRoutes = require("./routes/profileRoutes");
const technologyRoutes = require("./routes/technologyRoutes");
const projectRoutes = require("./routes/projectRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/profiles", profileRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/projects", projectRoutes);
app.get("/", (req, res) => {
  res.json({ mensagem: "DevShowcase API funcionando!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`DevShowcase API executando na porta ${PORT}`);
});