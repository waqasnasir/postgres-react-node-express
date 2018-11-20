const Todo = require('../models').Todo

module.exports = {
  create: (req, res) => {
    return Todo
      .create({
        title: req.body.title
      }).then(todo => res.status(200).send(todo))
      .catch(err => res.status(400).send(err))
  },
  list: (req, res) => Todo
    .all()
    .then(todos => res.status(200).send({ todos: todos }))
    .catch(err => res.status(400).send({ error: err }))
}
