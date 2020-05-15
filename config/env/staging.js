module.exports = {
    database: {
        connection: {
            connectionString: process.env.DATABASE_URL
        },
        debug: true,
        baseURL: 'https://covid19nig.herokuapp.com/'
    }
}
