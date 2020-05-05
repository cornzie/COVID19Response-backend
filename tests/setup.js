const db = require('postgresorm');
const config = require('../config');

beforeAll(() => {
    return db.initializeDatabase(config.database.connection);
});
