const cardSchema = require("../models/CardModel");
const postCard = async (req, res) => {
  const { title, id, description } = req.body;
  try {
    const card = new cardSchema({ title, id, description });

    await card
      .save()
      .then(() => {
        res.status(201).send("Card Created Sucessfully");
      })
      .catch((e) => {
        res.status(400).json({ error: e });
      });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

const getCardByTitle = async (req, res) => {
  const title = req.params.title;

  await cardSchema
    .find({ $text: { $search: title + "" } })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({ error: e });
    });
};

const getAllCards = async (req, res) => {
  await cardSchema
    .find({})
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((e) => res.status(400).json({ error: e }));
};

module.exports = { postCard, getAllCards, getCardByTitle };
