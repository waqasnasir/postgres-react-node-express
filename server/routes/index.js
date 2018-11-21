const todoController = require('../controllers').todo
const todoItemController = require('../controllers').todoItem

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({ message: 'welcome to apis' }))
  app.post('/api/todo', todoController.create)
  app.get('/api/todos', todoController.list)
  app.get('/api/todo/:todoId', todoController.retreive)
  app.put('/api/todo/:todoId', todoController.update)
  app.delete('/api/todo/:todoId', todoController.delete)
  app.post('/api/todo/:todoId/items', todoItemController.create)
  app.put('/api/todo/:todoId/items/:todoItemId', todoItemController.update)
}
