function projectOutputDto(project) {
  return {
    id: project.id,
    titulo: project.titulo,
    descricao: project.descricao,
    repositorio: project.repositorio,
    profileId: project.profileId,
    tecnologias: project.tecnologias,
  };
}

module.exports = projectOutputDto;