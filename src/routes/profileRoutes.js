const express = require("express");
const {
  criar,
  buscarPorId,
} = require("../controllers/profileController");

const router = express.Router();
/**
 * @swagger
 * /api/profiles:
 *   post:
 *     summary: Cadastrar um novo perfil
 *     tags:
 *       - Perfis
 *     responses:
 *       201:
 *         description: Perfil criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", criar);
router.get("/:id", buscarPorId);
/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Buscar perfil por ID
 *     tags:
 *       - Perfis
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Perfil encontrado com sucesso
 *       404:
 *         description: Perfil não encontrado
 */
module.exports = router;