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
  update: (req, res) => {
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
        todo.update({ title: req.body.title || todo.title })
          .then(todo => res.status(200).send({ todo }))
          .catch(err => res.status(400).send({ message: err }))
      })
      .catch(err => res.status(400).send(err))
  },
  delete: (req, res) => {
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
        todo.destroy()
          .then(todo => res.status(200).send({ message: 'Todo successfully deleted' }))
          .catch(err => res.status(400).send({ message: err }))
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
