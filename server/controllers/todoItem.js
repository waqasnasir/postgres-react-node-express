const TodoItem = require('../models').TodoItem

module.exports = {
  create: (req, res) => TodoItem.create({
    content: req.body.content,
    todoId: req.params.todoId
  })
    .then(todoItem => res.status(200).send({ todoItem: todoItem }))
    .catch(err => res.status(400).send({ err: err }))
}
