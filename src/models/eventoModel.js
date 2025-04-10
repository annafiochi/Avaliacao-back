import prisma from "../../prisma/client.js";

class EventoModel {
  getAll = async () => {
    return await prisma.task.findMany();
  };

  create = async (descricao) => {
    return await prisma.task.create({
      data: {
        descricao,
      },
    });
  };

  update = async (id, concluida) => {
    try {
      return await prisma.task.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
        },
      });
    } catch (error) {
      // Se a Evento não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.task.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      // Se a Evento não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  };

  getById = async (id) => {
    return await prisma.task.findUnique({
      where: { id },
    });
  };
}

export default new EventoModel();