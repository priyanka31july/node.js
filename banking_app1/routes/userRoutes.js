// routes/userRoutes.js

const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

module.exports = (db) => {
  router.post('/users', UserController.createUser(db));
  router.get('/users', UserController.getAllUsers(db));
  router.delete('/users/:id', UserController.deleteUser(db));

  return router;
};
