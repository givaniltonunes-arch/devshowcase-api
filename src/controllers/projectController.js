const validarProjectInput = require("../dtos/projectInputDto");
const projectOutputDto = require("../dtos/projectOutputDto");
const prisma = require("../lib/prisma");
const {
  criarProject,
  listarProjects,
} = require("../repositories/projectRepository");

async function criar(req, res) {
  const erro = validarProjectInput(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  try {
    const project = await criarProject(req.body);
    return res.status(201).json(projectOutputDto(project));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: "Não foi possível criar o projeto.",
    });
  }
}

async function listar(req, res) {
  try {
    const { tecnologia, page = 1, limit = 10 } = req.query;
    const projects = await listarProjects({ tecnologia, page, limit });

    return res.status(200).json(
      projects.map(projectOutputDto)
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: "Não foi possível listar os projetos.",
    });
  }
}
async function criarFeedback(req, res) {
const { nota, comentario } = req.body;
const projectId = Number(req.params.id);
if (!nota || nota < 1 || nota > 5) {
  return res.status(400).json({
    erro: "A nota deve ser um número entre 1 e 5.",
  });
}
if (!comentario) {
  return res.status(400).json({
    erro: "O comentário é obrigatório.",
  });
}
try {
const projeto = await prisma.project.findUnique({
  where: { id: projectId },
});
if (!projeto) {
  return res.status(404).json({
    erro: "Projeto não encontrado.",
  });
}
const feedback = await prisma.feedback.create({
  data: {
    nota,
    comentario,
    autor: "Anônimo",
    projectId,
  },
});
const media = await prisma.feedback.aggregate({
  where: { projectId },
  _avg: { nota: true },
});
await prisma.project.update({
  where: { id: projectId },
  data: { notaMedia: media._avg.nota || 0 },
});
return res.status(201).json({
  mensagem: "Feedback cadastrado com sucesso.",
  feedback,
  notaMedia: media._avg.nota || 0,
});
} catch (error) {
console.error(error);
return res.status(500).json({
  erro: "Não foi possível cadastrar o feedback.",
});
}  
}
async function darUpvote(req, res) {
  const projectId = Number(req.params.id);

  try {
    const projeto = await prisma.project.update({
      where: { id: projectId },
      data: {
        upvotes: {
          increment: 1,
        },
      },
    });

    return res.status(200).json({
      mensagem: "Upvote registrado com sucesso.",
      upvotes: projeto.upvotes,
    });
  } catch (error) {
    return res.status(404).json({
      erro: "Projeto não encontrado.",
    });
  }
}
async function associarTecnologia(req, res) {
  const projectId = Number(req.params.id);
  const { technologyId } = req.body;

  try {
    const projeto = await prisma.project.update({
      where: { id: projectId },
      data: {
        tecnologias: {
          connect: { id: technologyId },
        },
      },
      include: {
        tecnologias: true,
      },
    });

    return res.status(200).json(projeto);
  } catch (error) {
    return res.status(404).json({
      erro: "Projeto ou tecnologia não encontrado.",
    });
  }
}
module.exports = {
  criar,
  listar,
  criarFeedback,
  darUpvote,
  associarTecnologia,
};