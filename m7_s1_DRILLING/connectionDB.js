// Modulo para cargar las variables de entorno de .env
require('dotenv').config();

// Modulo npm node-postgres
const {
    Pool,
    Client
} = require("pg");

// URI de conexión en string 
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// conectando con una conexión al pool. 
const pool = new Pool({
    connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})

const client = new Client({
    connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})