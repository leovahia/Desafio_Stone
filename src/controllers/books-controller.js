const BooksModel = require('../models/books-model')
const BooksDAO = require('../DAO/books-dao')

function booksController(app, pool) {
    const DAO = new BooksDAO(pool)
    app.get('/books', (req, res) => {
        DAO.getBooks()
            .then(books => res.status(200).send(books.rows))
            .catch(err => res.status(404).send(err))
    })

    // Dar catch em qualquer erro, sugestão: conectar o bd

    app.get('/books/:id', (req, res) => {
        const {id} = req.params
        DAO.getBookById(id)
            .then(book => res.status(200).send(book.rows))
            .catch(err => res.status(404).send(err))
    })

    app.get('/books/:title', (req, res) => {
        const {title} = req.params
        DAO.getBookByTitle(title)
            .then(book => res.status(200).send(book))
            .catch(err => res.status(404).send(err))
    })

    app.post('/books', (req, res) => {
        const body = req.body   
        const book = new BooksModel(0, body.image, body.title, body.author, body.category, body.price)
        DAO.insertBook(book)
            .then(book => res.status(201).send(book))
            .catch(err => res.status(404).send(err))
    })

    app.put('/books/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        DAO.modifyBook(id, body)
            .then(book => res.status(200).send(`${book} alterado com sucesso`))
            .catch(err => res.status(404).send(err))
    })

    app.delete('/books/:id', (req, res) => {
        const id = req.params.id
        DAO.deleteBook(id)
            .then(book => res.status(200).send(`Livro removido com sucesso`))
            .catch(err =>  res.status(404).send(err))
    })
}

module.exports = booksController;






