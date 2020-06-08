const schema = {
    "$schema": "http://json-schema.org/schema#",
    required: ['doa', 'passport_no', 'transit_port'],
    properties: {
        date_of_arrival: {
            title: 'Date of Arrival',
            type: 'text'
        },
        passport_no: {
            title: 'Passport no.',
            type: 'text',
        },
        transit_port: {
            title: 'Transit Port',
            type: 'text',
        },
        date_of_departure: {
            title: 'Date of Departure',
            type: 'text'
        },
        address: {
            title: 'Address',
            type: 'text'
        },
        phone_number: {
            title: 'Phone Number',
            type: 'text'
        }
    }
}

module.exports = schema;
