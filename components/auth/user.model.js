const db = require('postgresorm');
const tables = require('../../config/tables');
const table = tables;
const schema = require('./user.schema');

class User {
    constructor() {
    }

    schema(type = 'signup') {
        if(type === 'login') {
            return {
                $schema: schema.$schema,
                required: ['email', 'password'],
                properties: {
                    email: schema.properties.email,
                    password: schema.properties.password
                }
            }
        }
        else return schema;
    }

    signup(data) {
        console.log('DATA', data);
        return db.create(table.users, data)
        .then(res => {
            console.log('RESULTS', res);
            return res;
        });
    }
    login(data) {
        return db.findone(table.users, {email: data.email})
        .then(res => {
            console.log('RESULTS', res);
            if(!res) throw new Error('User not found');
            else {
                if(data.password === res.password)
                    return res;
            }
        });
    }
}

module.exports = { User };
