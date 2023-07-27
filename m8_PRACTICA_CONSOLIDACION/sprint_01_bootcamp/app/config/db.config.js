require('dotenv').config();
const { HOST, USER, PASSWORD, DB, POSTGRES_PORT } = process.env; 

module.exports = {
  POSTGRES_URI: `postgres://${USER}:${PASSWORD}@${HOST}:${POSTGRES_PORT}/${DB}`,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}