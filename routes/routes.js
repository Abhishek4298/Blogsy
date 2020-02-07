const express = require('express');
const middleware = require('../middleware/token')
const userController = require('../controller/userController');
const postController = require('../controller/postController');
const router = express.Router();

router.post('/register',  userController.register);

router.post('/login', userController.login);

router.post('/post',  middleware.verifyToken, postController.addPost);

router.get('/post', middleware.verifyToken, postController.getPost);

module.exports =  router;     