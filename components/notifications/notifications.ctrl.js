const { Notification } = require('./notifications.model');
const cron = require('cron');

let admin = {};
let system = {};

admin.createReminder = (req, res, next) => {
    let reminder = new Reminder();
    reminder.name = req.body.name;
    reminder.frequency = req.body.frequency;
    reminder.message = req.body.message;
    reminder.title = req.body.message;
    return reminder.create()
    .then(res => {
        return res.success('Reminder Created');
    });
}

system.checkReminders = () => {
    cron.schedule('0 * * * *', function() {
        console.log('CHECKING REMINDERS');
    });
}

module.exports = { admin, system }
