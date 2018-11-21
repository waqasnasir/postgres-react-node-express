const Todo = require('../models').Todo
const TodoItem = require('../models').TodoItem

module.exports = {
  create: (req, res) => {
    return Todo
      .create({
        title: req.body.title
      }).then(todo => res.status(200).send(todo))
      .catch(err => res.status(400).send(err))
  },
  retreive: (req, res) => {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems'
        }]
      }).then(todo => {
        if (!todo) {
          return res.status(404).send({ message: 'To Do Not Found' })
        }
        res.status(200).send(todo)
      })
      .catch(err => res.status(400).send(err))
  },
  list: (req, res) => Todo
    .findAll({
      include: [{
        model: TodoItem,
        as: 'todoItems'
      }]
    })
    .then(todos => res.status(200).send({ todos: todos }))
    .catch(err => res.status(400).send({ error: err }))
}
