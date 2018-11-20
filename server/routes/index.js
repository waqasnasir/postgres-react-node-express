const todoController = require('../controllers').todo
const todoItemController = require('../controllers').todoItem

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({ message: 'welcome to apis' }))
  app.post('/api/todo', todoController.create)
  app.get('/api/todos', todoController.list)
  app.post('/api/todo/:todoId/items', todoItemController.create)
}
