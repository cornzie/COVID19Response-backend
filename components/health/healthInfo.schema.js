const schema = {
    "$schema": "http://json-schema.org/schema#",
    required: ['temperature', 'sore_throat', 'coughing', 'short_breath'],
    properties: {
        temperature: {
            title: 'Temperature',
            type: 'number'
        },
        sore_throat: {
            title: 'Do you have a sore throat?',
            type: 'boolean'
        },
        coughing: {
            title: 'Are You Coughing?',
            type: 'boolean',
        },
        short_breath: {
            title: 'Any Shortness of Breath?',
            type: 'boolean'
        },
        comments: {
            title: 'Anything else you would like to share?',
            type: 'text'
        }
    }
}

module.exports = schema;
