const db = require('postgresorm');

class Notifications {
    constructor() {
    }

    create() {
        return db.create(table.notifications, this);
    }

    listRemindersForCurrentHour() {
        return db.customquery(`SELECT * FROM ${ table.reminders } 
            WHERE extract(hour from current_timestamp) >= hour`)
        .then(res => res.rows);
    }
}
