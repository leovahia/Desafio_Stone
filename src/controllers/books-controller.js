const BooksModel = require('../models/books-model')
const BooksDAO = require('../DAO/books-dao')

function booksController(app) {
    app.get('/books', (req, res) => {

    })

    app.get('/books/:id', (req, res) => {

    })

    app.get('/books/:title', (req, res) => {

    })

    app.post('/books', (req, res) => {

    })

    app.put('/books/:id', (req, res) => {

    })

    app.delete('/books/:id', (req, res) => {

    })
}

module.exports = booksController;