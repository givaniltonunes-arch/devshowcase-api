const prisma = require("../lib/prisma");

async function criarProfile(dados) {
  return prisma.profile.create({
    data: dados,
  });
}

async function buscarProfilePorId(id) {
  return prisma.profile.findUnique({
    where: { id },
  });
}

module.exports = {
  criarProfile,
  buscarProfilePorId,
};