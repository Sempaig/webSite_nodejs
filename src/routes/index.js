const express = require('express');
const router = express.Router();

//routers 20:44
router.get ('/', (req, res) => {
    res.render('index.html', {title: ' firts Websits'});
 });

 router.get ('/contact', (req, res) => {
   res.render('contact.html', {title: 'contact page'});
 });

 module.exports = router
