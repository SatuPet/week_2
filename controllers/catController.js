'use strict';
// catController

const catModel = require('../models/catModel');

//const cats = catModel.cats;
const {cats} = catModel;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
    res.json(catModel.getCat(req.params.id));
}

const cat_post = (req, res) => {
  console.log(req.body, req.file);
  res.send('hjksdhfkjsdhf');
}

module.exports = {
  cat_list_get,
  cat_get,
  cat_post,
};
