const createNotification = require('../../api/notifications/create-notifications.controller');
const getNotification = require('../../api/notifications/get-notifications.controller');
const deleteNotification = require('../../api/notifications/delete-notifications.controller');
const express = require('express');
const createRouter = express.Router();

createRouter
    .route('/')
    .post(createNotification)

createRouter
    .route('/:accountId')
    .get(getNotification)

createRouter
    .route('/:accountId/:color')
    .delete(deleteNotification)
module.exports = createRouter;