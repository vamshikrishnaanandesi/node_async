const Notification = require('../../models/notifications/Notification');
var HttpStatus = require('http-status-codes');

const deleteNotification = async function (req, res, next) {
    const accountId = req.params.accountId;
    const color = req.params.color;
    Notification.deleteOne({ accountId: accountId, color: color })
        .then((response) => {
            return res.json({ message: 'Succesfully deleted notifications' }, HttpStatus.OK)
        })
        .catch((err) => {
                    return res.json({ err: 'Internal server error' }, HttpStatus.INTERNAL_SERVER_ERROR)
                })
};

module.exports = deleteNotification;