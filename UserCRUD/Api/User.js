const express = require('express');
const User = require('../DB/User');
const route = express.Router();


route.post('/makeNew', async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get("/fetch", async function(req, res) {
  User.find({ })
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', error);
    })
});

module.exports = route;
