function validarProjectInput(dados) {
  const { titulo, repositorio, profileId } = dados;

  if (!titulo || titulo.trim() === "") {
    return "O título é obrigatório.";
  }

  if (repositorio && !repositorio.startsWith("http")) {
    return "A URL do repositório é inválida.";
  }

  if (!Number.isInteger(profileId)) {
    return "O profileId é obrigatório e deve ser um número inteiro.";
  }

  return null;
}

module.exports = validarProjectInput;