const MongoClient = require('mongodb').MongoClient;
//const Server = require('mongodb').Server;

const url = 'mongodb://localhost:27017';

const dbName = 'covid19response';

let client;
let db;
let userDoc;
module.exports.init = async function() {
    console.log('INITING DB');
    if(!db || db === undefined) {
        console.info('Creating db');
        return MongoClient.connect(url)
        .then(client => {
            db = client.db(dbName)
            console.log('BUTP');
            return db.createCollection('users', {
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
            .then(res => {
                console.log('RESSS', res);
                userDoc = res;
                return db;
            });
        });
    } else return db;
}

const getDb = function() {
    if(!db) console.log('dB HAS not been initialized');
    else return db;
}

module.exports.getDb = getDb;
