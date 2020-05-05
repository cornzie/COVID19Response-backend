const app = require('express')();
const helmet = require('helmet');
const session = require('express-session');
const pgSessionStore = require('connect-pg-simple')(session);
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./config/routes');

const config = require('./config');
const database = require('postgresorm');

const pgSession = new pgSessionStore({ conString: config.database.connection.connectionString,
            tableName: 'session' });

const sessionConfig = {
    store:  pgSession,
    name: 'SID',
    secret: 'blahblah',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100*60 * 60 * 24 * 30
        //sameSite: true
    }
}
app.use(session(sessionConfig));

database.initializeDatabase(config.database.connection);

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(router);

module.exports = app;
