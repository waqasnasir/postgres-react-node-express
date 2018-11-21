const TodoItem = require('../models').TodoItem

module.exports = {
  create: (req, res) => TodoItem.create({
    content: req.body.content,
    todoId: req.params.todoId
  })
    .then(todoItem => res.status(200).send({ todoItem: todoItem }))
    .catch(err => res.status(400).send({ err: err })),
  update: (req, res) => {
    return TodoItem
      .findById(req.params.todoItemId)
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({ message: 'To Do Item Not Found' })
        }
        todoItem.update({ content: req.body.content || todoItem.content, complete: req.body.complete || todoItem.complete })
          .then(todoItem => res.status(200).send({ todoItem }))
          .catch(err => res.status(400).send({ message: err }))
      })
      .catch(err => res.status(400).send(err))
  }
}
