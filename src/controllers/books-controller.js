const BooksModel = require('../models/books-model')
const BooksDAO = require('../DAO/books-dao')

function booksController(app, db) {
    const DAO = new BooksDAO(db)
    app.get('/books', async (req, res) => {
        DAO.getBooks()
            .then(books => res.send(books))
            .catch(err => res.send(err))
    })

    app.get('/books/:id', async (req, res) => {
        DAO.getBookById(book)
            .then(book => res.send(book))
            .catch(err => res.send(err))
    })

    app.get('/books/:title', (req, res) => {
        DAO.getBookByTitle(title)
            .then(book => res.send(book))
            .catch(err => res.send(err))
    })

    app.post('/books', (req, res) => {
        const body = req.body   
        const book = new BooksModel(0, body.image, body.title, body.author, body.price)
        DAO.insertBook(book)
            .then(book => res.send(book))
            .catch(err => res.send(err))
        console.log(book);
    })

    app.put('/books/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        DAO.modifyBook(id, body)
            .then(book => res.send(`${book} alterado com sucesso`))
            .catch(err => res.send(err))

    })

    app.delete('/books/:id', (req, res) => {
        const id = req.params.id
        DAO.getBookById(id)
            .then(book => res.send(`${book} removido com sucesso`))
            .catch(err =>  res.send(`Falha ao remover o ${book}`))
    })
}

module.exports = booksController;