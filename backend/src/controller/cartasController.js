createCartas = async (req, res) => {
  const carta = req.body;

  try {
    await req.app.get("database")("cartas").insert(carta);
    res.status(201).send(carta);
  } catch (error) {
    console.error("Erro ao inserir a carta:", error);
    res.status(500).send("Erro ao inserir a carta");
  }

  // Verifica se já existe uma carta com o mesmo numero
  // const existingCarta = carta.find((item) => item.numero === carta.numero);
  // if (existingCarta) {
  //   return res
  //     .status(400)
  //     .json({ error: "Já existe uma carta com esse numero." });
  // }

  // if (Object.keys(carta).length > 0) {
  //   carta.push(carta);
  //   res.status(201).send(carta);
  // } else {
  //   res.status(406).send("Não foi possível adicionar essa carta!");
  // }
};

getCartas = async (req, res) => {
  try {
    const cartas = await req.app.get("database")("cartas").select();
    res.status(200).json(cartas);
  } catch (error) {
    console.error("Erro ao obter as cartas:", error);
    res.status(500).send("Erro ao obter as cartas");
  }
};

getOneCarta = async (req, res) => {
  let numero = req.params.numero;
  try {
    const carta = await req.app
      .get("database")("cartas")
      .where("numero", numero)
      .first();
    if (carta) {
      res.status(200).send(carta);
    } else {
      res.status(404).send("Não há cartas contempladas com esse número");
    }
  } catch (error) {
    console.error("Erro ao obter a carta:", error);
    res.status(500).send("Erro ao obter a carta");
  }
};

updateCarta = async (req, res) => {
  let numero = req.params.numero;
  try {
    await req.app
      .get("database")("cartas")
      .where("numero", numero)
      .update(req.body);
    res.status(200).send("Carta atualizada com sucesso");
  } catch (error) {
    console.error("Erro ao atualizar a carta:", error);
    res.status(500).send("Erro ao atualizar a carta");
  }
};

removeCarta = async (req, res) => {
  let numero = req.params.numero;
  try {
    const deleted = await req.app
      .get("database")("cartas")
      .where("numero", numero)
      .del();
    if (deleted) {
      res
        .status(200)
        .send(`A carta de número ${numero} foi excluída com sucesso!`);
    } else {
      res
        .status(404)
        .send(`A carta de número ${numero} não existe ou foi removida`);
    }
  } catch (error) {
    console.error("Erro ao remover a carta:", error);
    res.status(500).send("Erro ao remover a carta");
  }
};

module.exports = {
  getCartas,
  getOneCarta,
  createCartas,
  updateCarta,
  removeCarta,
};
