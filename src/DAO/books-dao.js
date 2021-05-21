module.exports = class BooksDAO {
    
    constructor(pool) {
        this.pool = pool
    }
    
    getBooks() {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM books',
            (err, books) => {
                if(err) rej(err) 
                else res(books) 
            })
        } 
    )}

    getBookById(id) {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM books WHERE id = $1',
            [id],
            (err, book) => {
                if(err) rej(err)
                else res(book)
            })
        })
    }

    getBookByTitle(title) {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM books WHERE title = $1',
            [title],
            (err, book) => {
                if(err) rej(err)
                else res(book)
            })
        })
    }

    insertBook(book) {
        return new Promise((res, rej) => {
            this.pool.query('INSERT INTO books (image, title, author, category, price) VALUES ($1, $2, $3, $4, $5)'
            , [book.image, book.title, book.author, book.category, book.price]
            , (err) => {
                if(err) rej('Falha ao inserir livro')
                else res('Livro inserido com sucesso')
            })
        })
    }

    modifyBook(book, body) {
        return new Promise((res, rej) => {
            this.pool.query('UPDATE books SET title = $1, author = $2, price = $3 WHERE id = $4'
            , [body.title, body.author, body.price, book]
            , (err) => {
                if(err) rej('Falha ao alterar o livro')
                else res('Livro alterado com sucesso')
            })
        })
    }

    deleteBook(book) {
        return new Promise((res, rej) => {
            this.pool.query('DELETE FROM books WHERE id = $1'
            , [book]
            , (err) => {
                if(err) rej('Falha ao deletar o livro')
                else res('Livro deletado com sucesso')
            })
        })
    }
}