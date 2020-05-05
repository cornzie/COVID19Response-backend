const app = require('express')();
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./config/routes');

const config = require('./config');
const database = require('postgresorm');

database.initializeDatabase(config.database.connection);

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(router);

module.exports = app;
