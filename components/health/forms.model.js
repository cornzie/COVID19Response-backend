const db = require('postgresorm');
const Ajv = require('ajv');
const table = require('../../config/tables');
const healthFormSchema = require('./healthInfo.schema');
const quarantineFormSchema = require('./quarantineForm.schema');

class HealthForm {
    constructor(){
    }

    get schema() {
        return healthFormSchema;
    }

    create(data) {
        return db.create(table.healthForm, data);
    }
}

class QuarantineForm {
    constructor(){
    }

    get schema() {
        return quarantineFormSchema;
    }

    create(data) {
        let date_of_arrival = new Date(data.date_of_arrival);
        delete data.date_of_arrival;
        console.log({date_of_arrival, ...data});
        return db.create(table.travelForm, {date_of_arrival, ...data});
    }
}

module.exports = { HealthForm, QuarantineForm };
