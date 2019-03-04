const createController = require('../../api/account/create.controller');
const express = require('express');
const createRouter = express.Router();

createRouter
    .route('/')
    .post(createController)

module.exports = createRouter;