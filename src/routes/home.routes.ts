const homeRouter = require('express').Router();

const loginController = require('../controllers/home/login.controller');
homeRouter.post('/login', loginController.login);

const registerController = require('../controllers/home/register.controller');
homeRouter.post('/register/customer', registerController.customer);
homeRouter.post('/register/admin', registerController.admin);


module.exports = homeRouter
