
const router = require('express').Router();
const {User} = require("../../models")
const ObjectId = require('mongodb').ObjectId;

//TODO - ROUTE THAT GETS ALL THE USERS, include friends?
router.get('/', (req,res)=> {
  User.find({}, (err, users) => {
    res.status(200).json(users);
  });
});

//TODO - ROUTE THAT CREATES A NEW USER
router.post('/', (req,res)=> {
  User.create({
    username:req.body.username,
    email:req.body.email
  }, (err, user) => {
    res.status(200).json(true)
  })

});

//TODO - ROUTE THAT GETS A SINGLE USER BASED ON USER ID
router.get('/:userId', (req,res) => {
  const id = req.params.userId;
  User.findById(id, (err, user) => {
    if (err) {
      res.status(500).json(err);
      console.log(err);
    } else {
      res.status(200).json(user);
    }
  });
});


//TODO - ROUTE THAT UPDATES A SINGLE USER
router.put('/:userId', (req,res)=> {
  const id = req.params.id;
  User.findByIdAndUpdate(
    {
      username: req.body.username,
      email:req.body.email
    },
    (err, user) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(user);
      }
    }
    
  )
});

//TODO - ROUTE THAT DELETES A SINGLE USER BASED ON USER ID
router.delete('/:userId', (req,res)=> {
  const id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json('User Deleted');
    }
  });
});

//TODO - ROUTE THAT ADDS A FRIEND TO A USER
router.put('/:userId/friends/:friendId', (req,res)=> {

})

//TODO - ROUTE THAT DELETES A FRIEND FROM A USER'S FRIENDS, DONT DELETE THE FRIEND AS A USER THOUGH!
router.delete('/:userId/friends/:friendId', (req,res)=> {
  
});

module.exports = router;
