const express = require('express');
const User = require('../DB/User');
const route = express.Router();
var cors = require('cors')



route.use(cors());

route.post('/makeNew', async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get("/fetch", async function (req, res) {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    })
});

route.get("/fetch/:_id", async function (req, res) {
  User.findOne({ _id: req.params._id })
    .then((data) => {
      res.json(data);
    });

});

route.delete("/delete/:_id", async function (req, res) {
  User.remove({ _id: req.params._id })
    .then((data) => {
      res.json(data);
    });
})

route.put('/update/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
   .then(User => res.json({ msg: 'Updated successfully' }))
   .catch(err =>
    res.status(400).json({ error: 'Unable to update the Database' })
   );
 });

module.exports = route;
