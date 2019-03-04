const Notification = require('../../models/notifications/Notification');
var HttpStatus = require('http-status-codes');

const create = async function (req, res, next) {
    const { accountId, name, color } = req.body;
    const notification = new Notification({ accountId, name, color });
    await notification.save()
        .then((response) => {
            return res.json({ message: 'success' }, HttpStatus.CREATED);
        })
        .catch((err) => {
            return res.json({ err: 'Internal server error' }, HttpStatus.INTERNAL_SERVER_ERROR);
        })
};

module.exports = create;