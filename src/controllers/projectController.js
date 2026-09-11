const validarProjectInput = require("../dtos/projectInputDto");
const projectOutputDto = require("../dtos/projectOutputDto");

const {
  criarProject,
  listarProjects,
} = require("../repositories/projectRepository");

async function criar(req, res) {
  const erro = validarProjectInput(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  try {
    const project = await criarProject(req.body);
    return res.status(201).json(projectOutputDto(project));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: "Não foi possível criar o projeto.",
    });
  }
}

async function listar(req, res) {
  try {
    const projects = await listarProjects();

    return res.status(200).json(
      projects.map(projectOutputDto)
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: "Não foi possível listar os projetos.",
    });
  }
}

module.exports = {
  criar,
  listar,
};