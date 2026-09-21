const prisma = require("../lib/prisma");

async function criarTechnology(dados) {
  return prisma.technology.upsert({
    where: {
      nome: dados.nome,
    },
    update: dados,
    create: dados,
  });
}

async function listarTechnologies() {
  return prisma.technology.findMany();
}

module.exports = {
  criarTechnology,
  listarTechnologies,
};