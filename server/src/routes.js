const authController = require('./controllers/AuthController')
const authControllerPolicy = require('./policies/AuthControllerPolicies')
module.exports = (app) => {
  app.post('/register', authControllerPolicy.register, authController.register)
  app.post('/login', authController.login)
}
