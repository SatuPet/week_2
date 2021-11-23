'use strict';

const { validationResult } = require('express-validator');
const {getAllUsers, getUser, addUser} = require('../models/userModel');
const { httpError } = require('../utils/errors');


const user_list_get = async (req, res, next) => {
  try{
    const users = await getAllUsers(next);
    if (users.length > 0){
      res.json(users);
    }else{
      next('no users found', 404);
    }
} 
catch (e){
  console.log('user_get error', e.message);
  next(httpError('internal server error', 500));
}
};


const user_get = async (req, res, next) => {
  try{
    const users = await getUser(req.params.id, next);
    if (users.length > 0){
      res.json(users);
    }else{
      next('no users found', 404);
    }
  res.json(await user_get(next));
} 
catch (e){
  console.log('user_get error', e.message);
  next(httpError('internal server error', 500));
}
};

const user_post = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    console.log('user_post validation', errors.array());
    next(httpError('invalid data', 400));
    return;
  }
  try{
    console.log('lomakeesta',req.body);
    const{ name, email, passwd } = req.body;
    const tulos = await addUser(name, email, passwd, next);
    if (tulos.affectedRows > 0){
      res.json({
        message: 'user added',
        user_id: tulos.insertId,
      });

    }else{
      next(httpError('no user inserted', 400));
    }
} 
catch (error){
  console.log('user post error', e.message);
  next(httpError('internal server error', 500));
}
};

module.exports = {
    user_list_get,
    user_get,
    user_post
  };