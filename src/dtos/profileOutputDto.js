function profileOutputDto(profile) {
  return {
    id: profile.id,
    nome: profile.nome,
    bio: profile.bio,
    email: profile.email,
    githubUrl: profile.githubUrl,
  };
}

module.exports = profileOutputDto;