const {Pool} = require("pg");
require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        },
        pool: {
            min: 2, // Minimum number of connections
            max: 10 // Maximum number of connections
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2, // Minimum number of connections
            max: 10 // Maximum number of connections
        }
    }
};
