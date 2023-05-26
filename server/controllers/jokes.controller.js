const Joker = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joker.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
  Joker.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joker.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joker.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
