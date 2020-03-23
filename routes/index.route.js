var express = require('express');
const indexModel = require('../models/index.model');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const loadCat = await indexModel.loadCat();
  const loadHotNew = await indexModel.loadHotNew();
  const loadNewFirst = await indexModel.loadNewFirst();
  const loadNewSecond = await indexModel.loadNewSecond();
  const loadHot = await indexModel.loadHot();
  const loadSeriaFirst = await indexModel.loadSeriaFirst();
  const loadSeriaSecond = await indexModel.loadSeriaSecond();
  res.render('posts/index', { 
    title: 'Sport News',
    loadCat: loadCat,
    loadHotNew:loadHotNew,
    loadNewFirst:loadNewFirst,
    loadNewSecond: loadNewSecond,
    loadHot: loadHot,
    loadSeriaFirst: loadSeriaFirst,
    loadSeriaSecond: loadSeriaSecond,
  });
});

module.exports = router;
