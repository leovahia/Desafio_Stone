module.exports = class SalesDAO {

    constructor(bd) {
        this.bd = bd;
    }

    getSales() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM VENDAS',
            (err, sales) => {
                if(err) rej(err)     
                else res(sales) 
            })

        } 
    )}

    getSaleById(id) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM VENDAS WHERE ID = (?)',
            [id],
            (err, sale) => {
                if(err) rej(err)
                else res(sale)
            })
        })
    }

    getSaleByStatus(status) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM VENDAS WHERE STATUS = (?)',
            [status],
            (err, sales) => {
                if(err) rej(err)
                else res(sales)
            })
        })
    }

    insertSale(sale) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO VENDAS (STATUS, PRECO, ID_CLIENTE, ID_LIVRO) VALUES (?, ?, ?, ?)'
            , [sale.status, sale.price, sale.id_cliente, sale.id_livro]
            , (err) => {
                if(err) rej('Falha ao inserir a venda')
                else res('Venda inserida com sucesso')
            })
        })
    }

    modifySale(sale, body) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE VENDAS SET DESCRICAO = (?), STATUS = (?) WHERE ID = (?)'
            , [body.descricao, body.status, sale]
            , (err) => {
                if(err) rej('Falha ao alterar a venda')
                else res('Venda alterada com sucesso')
            })
        })
    }

    deleteBook(book) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM VENDAS WHERE ID = (?)'
            , [book]
            , (err) => {
                if(err) rej('Falha ao deletar o livro')
                else res('Livro deletado com sucesso')
            })
        })
    }
}