const db = require('postgresorm');
const tables = require('../../config/tables');
const table = tables;

class User {
    constructor() {
    /*
        this.db = dbMod.getDb();
        console.log('DATAAASE', this.db);
        this.userDoc = this.db.createCollection('users', {
            validator: { $jsonSchema: {
                bsonType: 'object',
                required: ["email", 'password'],
                properties: {
                    email: {
                        bsonType: 'string',
                        pattern: '@mongodb\.com$',
                    },
                    password: {
                        bsonType: 'string',
                    }
                }
            }},
            validationLevel: 'strict'
        })
    */
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
