const cors = require('cors')
const path = require('path')
const db = require('./infra/sqlite-db.js')
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const booksController = require('./controllers/books-controller')
const salesController = require('./controllers/sales-controller')
const usersController = require('./controllers/users-controller')

app.use(express.json())
app.use(cors())
booksController(app, db)
salesController(app, db)
usersController(app, db)

 
app.listen(PORT, () => console.log("Servidor rodando"))