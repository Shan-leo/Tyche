const {Pool} = require("pg");
const dotenv = require('dotenv');
dotenv.config();

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// } as any);
//
// export default pool;

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
