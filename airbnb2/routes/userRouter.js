//Core Module
const path = require('path');

//External module
const express = require('express');
const userRouter = express.Router();

//Local Module
const rootDir = require('../utils/pathUtil');

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;