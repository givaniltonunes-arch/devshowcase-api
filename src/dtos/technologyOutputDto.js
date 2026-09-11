function technologyOutputDto(technology) {
  return {
    id: technology.id,
    nome: technology.nome,
  };
}

module.exports = technologyOutputDto;