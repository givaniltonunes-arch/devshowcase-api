const prisma = require("../lib/prisma");

async function criarProject(dados) {
  return prisma.project.create({
    data: dados,
    include: {
      tecnologias: true,
    },
  });
}

async function listarProjects({ tecnologia, page = 1, limit = 10 } = {}) {
 const pagina = Number(page);
 const limite = Number(limit);
 const skip = (pagina - 1) * limite;
 const where = tecnologia
  ? { tecnologias: { some: { nome: tecnologia } } }
  : {};
  return prisma.project.findMany({
    where,
    skip,
take: limite,
    include: {
      tecnologias: true,
    },
  });
}

module.exports = {
  criarProject,
  listarProjects,
};