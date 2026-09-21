const express = require("express");
const {
  criar,
  listar,
} = require("../controllers/technologyController");

const router = express.Router();
/**
 * @swagger
 * /api/technologies:
 *   post:
 *     summary: Cadastrar uma nova tecnologia
 *     tags:
 *       - Tecnologias
 *     responses:
 *       201:
 *         description: Tecnologia criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", criar);
/**
 * @swagger
 * /api/technologies:
 *   get:
 *     summary: Listar tecnologias
 *     tags:
 *       - Tecnologias
 *     responses:
 *       200:
 *         description: Lista de tecnologias retornada com sucesso
 */
router.get("/", listar);

module.exports = router;