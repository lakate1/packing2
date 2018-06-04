import * as express from 'express';
import passport = require('passport');
import jwt = require('jsonwebtoken');

import User from '../models/user';
let router = express.Router();

router.post('/Register', (req, res, next) => {
  let user:any = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function(err, newUser){
    if(err){
      return next(err);
    }
    res.json({message: "Registration complete. Please login."})
  }).catch((err) => {
    res.status(500);
  });
});
//Put in verify Token 
router.post('/Login/local', (req, res, next) => {
  // jwt.verify(req.token,"secretkey", (err, authData) => {
  //   if(err) {
  //     res.sendStatus(403);
  //   } else {
      
  //   }

  // })

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



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// //Format of Token
// //Authorization: Bearer <access Token

// //Verify Token
// function verifyToken(req,res,next) {
// //Get auth header value
// let bearerHeader = req.headers["authorization"];
// //Check if bearer is undefined
// if(typeof bearerHeader !== "undefined") {
//   //Split at the space
//   let bearer = bearerHeader.split(" ");
//   //Get token from array
//   let bearerToken = bearer[1];
//   //Set the Token
//   req.token = bearerToken;
//   //Next middleware
//   next();

// } else {
//   //Forbidden
//   res.sendstatus(403);
// }
// }
export default router;
