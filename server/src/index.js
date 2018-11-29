const express = require('express');
let router = express.Router(),
    userrouter = require('./usuarios'),
    productrouter = require('./productos'),
    cartrouter = require('./cart');


const verifySignin = (req, res, next)=>{
  if(!req.session.user){
    return res.send('Not Allowed');
  }
  return next();
}
router.use('/usuarios', userrouter);
router.use('/productos', verifySignin ,productrouter);
router.use('/cart', verifySignin, cartrouter);

module.exports = router;
