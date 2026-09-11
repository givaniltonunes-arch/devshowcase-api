const validarTechnologyInput = require("../dtos/technologyInputDto");
const technologyOutputDto = require("../dtos/technologyOutputDto");

const {
  criarTechnology,
  listarTechnologies,
} = require("../repositories/technologyRepository");

async function criar(req, res) {
  const erro = validarTechnologyInput(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  try {
    const technology = await criarTechnology(req.body);
    return res.status(201).json(technologyOutputDto(technology));
  } catch (error) {
   console.error(error); 
    return res.status(500).json({
      erro: "Não foi possível criar a tecnologia.",
    });
  }
}

async function listar(req, res) {
  try {
    const technologies = await listarTechnologies();

    return res.status(200).json(
      technologies.map(technologyOutputDto)
    );
  } catch (error) {
    return res.status(500).json({
      erro: "Não foi possível listar as tecnologias.",
    });
  }
}

module.exports = {
  criar,
  listar,
};