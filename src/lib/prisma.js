require("dotenv").config();

const { PrismaClient } = require("../generated/prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const databaseUrl = process.env.DATABASE_URL;
try {
  const u = new URL(databaseUrl);
  console.log("DB_HOST:", u.hostname);
  console.log("DB_PORT:", u.port);
  console.log("DB_USER:", u.username);
} catch (error) {
  console.log("DATABASE_URL inválida:", error.message);
}
if (!databaseUrl) {
  throw new Error("DATABASE_URL não está definida.");
}
const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;