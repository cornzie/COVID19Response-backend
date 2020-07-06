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
        //return db.create(table.healthForm, data);
        return db.customquery(`INSERT INTO ${ table.healthForm } (temperature, sore_throat, coughing, comments, short_breath) 
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (id) DO UPDATE 
              SET temperature = $1, sore_throat = $2, coughing = $3, comments = $4, short_breath = $5
        `, [data.temperature, data.sore_throat, data.coughing, data.comments, data.short_breath])
        .then(res => res.rows);
    }
    diagnostics() {
        return db.customquery(`SELECT * FROM ${ table.healthForm }`).then(res => res.rows);
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
