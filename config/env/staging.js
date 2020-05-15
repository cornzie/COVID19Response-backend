module.exports = {
    database: {
        connection: {
            connectionString: process.env.DATABASE_URL
        },
        debug: true,
        cors: {
            origin: '*',
            credentials: true
        },
        baseURL: 'https://covid19nig.herokuapp.com/'
    }
}
