const router = require('express').Router();

const loginController = require('../controllers/home/login.controller');
router.post('/login', loginController.login);