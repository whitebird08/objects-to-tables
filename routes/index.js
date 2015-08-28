var express = require('express');
var router = express.Router();
var data = require('../node_modules/express/lib/data.js')

router.get('/', function(req, res, next) {

console.log(data)
var people = {info:data}  
  res.render('index', {info: data });
  console.log(info)


});
module.exports = router;
