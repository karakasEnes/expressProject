const friends = require('../models/friends.model.js');

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  const id = +req.params.friendID;
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      err: 'Friend cannot be found!',
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing name property!',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.status(201).json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
