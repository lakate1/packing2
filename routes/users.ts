import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');

import User from '../models/user';
let router = express.Router();

// POST - /Register this needs to be changed to save the user role
router.post('/Register', (req, res, next) => {
  let user:any = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.role= req.body.userrole;

  user.save(function(err, newUser){
    if(err){
      return next(err);
    }
    res.json({message: "Registration complete. Please login."})
  }).catch((err) => {
    res.status(500);
  });
});

router.post('/Login/local', (req, res, next) => {
  if(!req.body.username || !req.body.password){
    res.status(400).json({message:"Please fill in all fields."});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){
      return next(err);
    }
    if(user){
      return res.json({token: user.generateJWT()});
    }
    return res.status(400).send(info);
  })(req, res, next);
});


//this needs to be changed to get all lists who's userId matches the Id of the user logged in 
/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
  let key = 'Userid, Destination, Season, Item 1, Item 2, Item 3';
  localStorage.setItem(key, 'Value');
  let myItem = localStorage.getItem(key);  

});

export default router;
