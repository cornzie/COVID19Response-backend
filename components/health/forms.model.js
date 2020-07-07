const db = require('postgresorm');
const Ajv = require('ajv');
const table = require('../../config/tables');
const healthFormSchema = require('./healthInfo.schema');
const quarantineFormSchema = require('./quarantineForm.schema');

function validDate(date) {
    // Is probably dd-mm-yyyy. Will treat it like that first.
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let splitDate = date.split('-');
    splitDate[1] = months[splitDate[1] - 1];
    let date2 = splitDate.join('-');
    let validate = !isNaN(Date.parse(date2));
    if(validate) {
        return date2;
    } else {
        validate = !isNaN(Date.parse(date));
        if(validate) { // validate. Lol
            return date;
        } else throw new Error('Invalid Date');
    }

}

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
        console.log('DATA', data);
        let date_of_arrival = validDate(data.date_of_arrival);
        let date_of_departure = validDate(data.date_of_departure);
        delete data.date_of_arrival;
        delete data.date_of_departure;
        console.log({date_of_arrival, date_of_departure, ...data});
        return db.create(table.travelForm, {date_of_arrival, date_of_departure, ...data});
    }
}

module.exports = { HealthForm, QuarantineForm };
