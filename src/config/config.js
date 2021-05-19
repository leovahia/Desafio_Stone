require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = 'postgres://vvnulgyysiqmpt:807e0ec9a444784f26e0ac86651abd9b29d5d134133983e886f4fd441802fed7@ec2-54-197-100-79.compute-1.amazonaws.com:5432/d6d9m3rpvos943'

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

module.exports = {pool}


/* --- ARQUIVO NOSSO --
require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: `${process.env.DB_PORT}`,
})

module.exports = {pool};
    
 */

// Verificar nomes das variáveis { user, host, database, password ? .env}