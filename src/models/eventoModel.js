import prisma from "../../prisma/client.js";

class EventoModel {
  getAll = async () => {
    return await prisma.event.findMany();
  };

  create = async (titulo, descricao, data, local, capacidade, categoria, preco) => {
    return await prisma.event.create({
      data: {
        titulo,
        descricao,
        data,
        local,
        capacidade,
        categoria,
        preco,

      },
    });
  };

  update = async (id, titulo, descricao, data, local, capacidade, categoria, preco) => {
    try {
      return await prisma.event.update({
        where: { id },
        data: {
          titulo,
          descricao,
          data,
          local,
          capacidade,
          categoria,
          preco,
        },
      });
    } catch (error) {
      // Se a Evento não for encontrada, o Prisma lançará uma exceção
      console.error(error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.event.delete({
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
    return await prisma.event.findUnique({
      where: { id },
    });
  };
}

export default new EventoModel();