function validarProfileInput(dados) {
  const { nome, email, githubUrl } = dados;

  if (!nome || nome.trim() === "") {
    return "O nome é obrigatório.";
  }

  if (!email || email.trim() === "") {
    return "O e-mail é obrigatório.";
  }

  if (githubUrl && !githubUrl.startsWith("http")) {
    return "A URL do GitHub é inválida.";
  }

  return null;
}

module.exports = validarProfileInput;