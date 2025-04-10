import eventoModel from "../models/eventoModel.js";

class eventoController {
  getAll = async (req, res) => {
    try {
      const eventos = await eventoModel.getAll();
      res.json(eventos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar eventos" });
    }
  };

  create = async (req, res) => {
    const { titulo, data, local, descricao } = req.body;

    try {
      if (!titulo || !data || !local || !descricao) {
        return res.status(400).json({ erro: "Todos os campos (título, data, local e descrição) são obrigatórios" });
      }

      const novoEvento = await eventoModel.create(titulo, data, local, descricao);
      res.status(201).json(novoEvento);

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar evento" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;

    try {
      const { titulo, descricao, data, local, capacidade, categoria, preco } = req.body;

      if (!titulo || !descricao || !data || !local || !capacidade || !categoria || !preco) {
        return res.status(400).json({ erro: "Todos os campos (título, descrição, data, local, capacidade, categoria, preço) são obrigatórios" });
      }

      const eventoAtualizada = await eventoModel.update(
        Number(id),
        titulo,
        descricao,
        data,
        local,
        capacidade,
        categoria,
        preco
      );

      if (!eventoAtualizada) {
        return res.status(404).json({ erro: "evento não encontrado!" });
      }

      res.json(eventoAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar evento!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await eventoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "evento não encontrado" });
      }

      res.status(200).send({ message: "evento deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir evento!" });
    }
  };
}
export default new eventoController();
