const schema = {
    "$schema": "http://json-schema.org/schema#",
    required: ['firstname', 'lastname', 'email', 'password', 'phone'],
    properties: {
        firstname: {
            title: 'First Name',
            type: 'string',
        },
        lastname: {
            title: 'Last Name',
            type: 'string',
        },
        email: {
            title: 'Email Address',
            type: 'email'
        },
        password: {
            title: 'Password',
            type: 'string'
        },
        phone: {
            title: 'Phone Number',
            type: 'string'
        }
    }
}

module.exports = schema;
