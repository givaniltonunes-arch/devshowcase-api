const validarProfileInput = require("../dtos/profileInputDto");
const profileOutputDto = require("../dtos/profileOutputDto");

const {
  criarProfile,
  buscarProfilePorId,
} = require("../repositories/profileRepository");

async function criar(req, res) {
  const erro = validarProfileInput(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  try {
    const profile = await criarProfile(req.body);
    return res.status(201).json(profileOutputDto(profile));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: "Não foi possível criar o perfil.",
    });
  }
}

async function buscarPorId(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      erro: "ID inválido.",
    });
  }

  try {
    const profile = await buscarProfilePorId(id);

    if (!profile) {
      return res.status(404).json({
        erro: "Perfil não encontrado.",
      });
    }

    return res.status(200).json(profileOutputDto(profile));
  } catch (error) {
    return res.status(500).json({
      erro: "Não foi possível buscar o perfil.",
    });
  }
}

module.exports = {
  criar,
  buscarPorId,
};