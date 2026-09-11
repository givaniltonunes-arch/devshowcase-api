const prisma = require("../lib/prisma");

async function criarTechnology(dados) {
  return prisma.technology.create({
    data: dados,
  });
}

async function listarTechnologies() {
  return prisma.technology.findMany();
}

module.exports = {
  criarTechnology,
  listarTechnologies,
};