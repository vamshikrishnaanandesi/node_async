const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
    accountId: { type: String, required: true },
    name: { type: String },
    color: { type: String },

}, { timestamps: true });

// Account.index({ "email": { unique: true } })

module.exports = mongoose.model('Notification', Notification);