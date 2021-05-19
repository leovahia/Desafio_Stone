module.exports = class BooksDAO {
    
    constructor(pool) {
        this.pool = pool;
    }
    
    getBooks() {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM BOOKS',
            (err, books) => {
                if(err) rej(err) 
                else res(books) 
            })
        } 
    )}

    getBookById(id) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM BOOKS WHERE ID = (?)',
            [id],
            (err, book) => {
                if(err) rej(err)
                else res(book)
            })
        })
    }

    getBookByTitle(title) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM BOOKS WHERE TITLE = (?)',
            [title],
            (err, book) => {
                if(err) rej(err)
                else res(book)
            })
        })
    }

    insertBook(book) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO BOOKS (IMAGE, TITLE, AUTHOR, CATEGORY, PRICE) VALUES (?,?,?,?,?)'
            , [book.image, book.title, book.author, book.category, book.price]
            , (err) => {
                if(err) rej('Falha ao inserir livro')
                else res('Livro inserido com sucesso')
            })
        })
    }

    modifyBook(book, body) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE BOOKS SET TITLE = (?), AUTHOR = (?), PRICE = (?) WHERE ID = (?)'
            , [body.title, body.author, body.price, book ]
            , (err) => {
                if(err) rej('Falha ao alterar o livro')
                else res('Livro alterado com sucesso')
            })
        })
    }

    deleteBook(book) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM BOOKS WHERE ID = (?)'
            , [book]
            , (err) => {
                if(err) rej('Falha ao deletar o livro')
                else res('Livro deletado com sucesso')
            })
        })
    }
}