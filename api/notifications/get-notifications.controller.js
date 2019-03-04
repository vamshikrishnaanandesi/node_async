const Notification = require('../../models/notifications/Notification');
var HttpStatus = require('http-status-codes');

const getNotification = async function (req, res, next) {
    const accountId = req.params.accountId;
    Notification.find({ accountId: accountId })
        .then((response) => {
            return res.json({ message: 'Succesfully fetched notifications', data: response}, HttpStatus.ACCEPTED)
        })
        .catch((err) => {
                    return res.json({ err: 'Internal server error' }, HttpStatus.INTERNAL_SERVER_ERROR)
                })
};

module.exports = getNotification;