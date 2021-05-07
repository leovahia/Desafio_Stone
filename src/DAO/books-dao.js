module.exports = class TarefasDAO {

    constructor(bd) {
        this.bd = bd;
    }

    getBooks() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM LIVROS',
            (err, books) => {
                if(err) rej(err)     
                else res(books) 
            })

        } 
    )}

    getBookById(book) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM LIVROS WHERE ID = (?)'),
            [book],
            (err, book) => {
                if(err) rej(err)
                else res(book)
            }
        })
    }

    getBookByTitle(title) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM LIVROS WHERE TITULO = (?)'),
            [title],
            (err, title) => {
                if(err) rej(err)
                else res(title)
            }
        })
    }

    insertBook(book) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO LIVROS (IMAGEM, TITULO, AUTOR, PRECO) VALUES (?,?,?,?)'
            , [book.image, book.title, book.author, book.price]
            , (err) => {
                if(err) rej('Falha ao inserir livro')
                else res('Livro inserido com sucesso')
            })
        })
    }

    modifyBook(book, body) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE LIVROS SET DESCRICAO = (?), STATUS = (?) WHERE TITULO = (?)'
            , [body.descricao, body.status, book ]
            , (err) => {
                if(err) rej('Falha ao alterar a tarefa')
                else res('Tarefa alterada com sucesso')
            })
        })
    }

    deleteBook(book) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM LIVROS WHERE TITULO = (?)'
            , [book]
            , (err) => {
                if(err) rej('Falha ao deletar o livro')
                else res('Livro deletado com sucesso')
            })
        })
    }
}