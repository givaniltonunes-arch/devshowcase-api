const express = require("express");

const {
  criar,
  listar,
  criarFeedback,
  darUpvote,
  associarTecnologia,
} = require("../controllers/projectController");

const router = express.Router();


/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Cadastrar um novo projeto
 *     tags:
 *       - Projetos
 *     responses:
 *       201:
 *         description: Projeto criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", criar);
/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Listar projetos
 *     tags:
 *       - Projetos
  *     parameters:
 *       - in: query
 *         name: tecnologia
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Lista de projetos retornada com sucesso
 */
router.get("/", listar);
/**
 * @swagger
 * /api/projects/{id}/feedbacks:
 *   post:
 *     summary: Cadastrar feedback em um projeto
 *     tags:
 *       - Projetos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Feedback cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Projeto não encontrado
 */
router.post("/:id/feedbacks", criarFeedback);
/**
 * @swagger
 * /api/projects/{id}/upvote:
 *   put:
 *     summary: Incrementar curtida de um projeto
 *     tags:
 *       - Projetos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Curtida registrada com sucesso
 *       404:
 *         description: Projeto não encontrado
 */
router.put("/:id/upvote", darUpvote);
router.put("/:id/technologies", associarTecnologia);
/**
 * @swagger
 * /api/projects/{id}/technologies:
 *   put:
 *     summary: Associar tecnologia a um projeto
 *     tags:
 *       - Projetos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tecnologia associada ao projeto com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Projeto não encontrado
 */
module.exports = router;