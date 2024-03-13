const express = require('express')
const router = express.Router();

app.get('usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
  });
  
  app.get('usernames/:name', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames.filter((username) => {return username.username == req.params.name}));
  });

  module.exports = router