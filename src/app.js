const cors = require('cors')
const path = require('path')
const db = require('./infra/sqlite-db')
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const booksController = require('./controllers/books-controller')

app.use(express.json())
app.use(cors())
booksController(app, db)
 
app.listen(PORT, () => console.log("Servidor rodando"))