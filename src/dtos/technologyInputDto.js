function validarTechnologyInput(dados) {
  const { nome } = dados;

  if (!nome || nome.trim() === "") {
    return "O nome da tecnologia é obrigatório.";
  }

  return null;
}

module.exports = validarTechnologyInput;