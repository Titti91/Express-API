var express = require('express');
var router = express.Router();

let Temperature = require ('../models/temperatureModel');

 router.get('/', function(req, res, next) {
   Temperature.find({}, (err, temperatures) => {
         res.json(temperatures)
   })
 });

router.post('/', function(req, res, next) {
  let temperature = new Temperature(req.body);
  temperature.save();
  res.status(201).send(temperature);
});

module.exports = router;
