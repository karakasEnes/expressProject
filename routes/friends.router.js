const express = require('express');

const friendsController = require('../controllers/friends.controller.js');

const friendsRouter = express.Router();

//middleware to friendsRoute
friendsRouter.use((req, res, next) => {
  console.log('Middleware by friends router!');
  next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendID', friendsController.getFriend);

module.exports = friendsRouter;
