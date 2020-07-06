module.exports = {
    database: {
        connection: {
            connectionString: 'postgresql://adesuwa:password@localhost:5432/covid19'
        },
        debug: true
    },
    cors: {
        origin: [],
        credentials: true
    },
    baseURL: 'http://localhost:3030',
}
