'use strict';

const express = require('express');
const { user_get, user_post, user_list_get } = require('../controllers/userController');
const router = express.Router();

router.get('/',user_list_get);
  
  router.get('/:id', user_get);
  
  router.post('/', user_post);

  router.put('/',(req,res) => {
      res.send('hahah');
  });
  
  router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.')
  });

module.exports = router;