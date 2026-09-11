const prisma = require("../lib/prisma");

async function criarProject(dados) {
  return prisma.project.create({
    data: dados,
    include: {
      tecnologias: true,
    },
  });
}

async function listarProjects() {
  return prisma.project.findMany({
    include: {
      tecnologias: true,
    },
  });
}

module.exports = {
  criarProject,
  listarProjects,
};