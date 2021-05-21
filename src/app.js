const cors = require('cors')
const { pool } = require('./config/config')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const booksController = require('./controllers/books-controller')
const salesController = require('./controllers/sales-controller')
const usersController = require('./controllers/users-controller')
const operatorsController = require('./controllers/operators-controller')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

booksController(app, pool)
salesController(app, pool)
usersController(app, pool)
operatorsController(app, pool)
 
app.listen(PORT, () => console.log("Servidor rodando"))