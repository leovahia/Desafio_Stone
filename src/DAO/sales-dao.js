module.exports = class SalesDAO {

    constructor(pool) {
        this.pool = pool;
    }

    getSales() {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM sales',
            (err, sales) => {
                if(err) rej(err)     
                else res(sales) 
            })

        } 
    )}

    getSaleById(id) {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM sales WHERE id = $1',
            [id],
            (err, sale) => {
                if(err) rej(err)
                else res(sale)
            })
        })
    }

    getSaleByStatus(status) {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM sales WHERE status = $1',
            [status],
            (err, sales) => {
                if(err) rej(err)
                else res(sales)
            })
        })
    }

    insertSale(sale) {
        return new Promise((res, rej) => {
            this.pool.query('INSERT INTO sales (status, price, id_book, id_user) VALUES ($1, $2, $3, $4)'
            , [sale.status, sale.price, sale.id_book, sale.id_user]
            , (err) => {
                if(err) rej('Falha ao inserir a venda')
                else res('Venda inserida com sucesso')
            })
        })
    }

    modifySale(sale, body) {
        return new Promise((res, rej) => {
            this.pool.query('UPDATE sales SET status = $1 WHERE id = $2'
            , [body.status, sale]
            , (err) => {
                if(err) rej('Falha ao alterar a venda')
                else res('Venda alterada com sucesso')
            })
        })
    }

    deleteBook(book) {
        return new Promise((res, rej) => {
            this.pool.query('DELETE FROM sales WHERE id = $1'
            , [book]
            , (err) => {
                if(err) rej('Falha ao deletar o livro')
                else res('Livro deletado com sucesso')
            })
        })
    }
}