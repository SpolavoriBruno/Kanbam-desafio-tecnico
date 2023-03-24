const Card = require("../model/card");

function getCard(req, res) {
  Card.get().then((cards) => {
    res.json(cards).status(201);
  });
}

async function createCard(req, res) {
  const { titulo, conteudo, lista, id } = req.body;
  const card = { titulo, conteudo, lista };

  if (!titulo || !conteudo || !lista || id) return res.sendStatus(400);

  Card.insert(card)
    .then((result) => result.get({ plain: true }))
    .then((result) => {
      return res.json(result).status(201);
    });
}

async function updateCard(req, res) {
  const { id } = req.params;
  const card = req.body;

  Card.update(id, card).then((card) => {
    return res.json(card).status(202);
  }).catch(error => {
    return res.sendStatus(400)
  });
}

async function deleteCard(req, res) {
  const { id } = req.params;
  const card = await Card.get(id);

  if (!card) return res.sendStatus(404);

  await Card.delete(id);

  const cards = await Card.get();
  return res.json(cards).status(202);
}

module.exports = {
  getCard,
  createCard,
  updateCard,
  deleteCard,
};
