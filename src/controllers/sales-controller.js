const SalesModel = require('../models/sales-model')
const SalesDAO = require('../DAO/sales-dao')

function salesController(app, db) {
    const DAO = new SalesDAO(db)
    app.get('/sales', (req, res) => {
        DAO.getSales()
            .then(sales => res.status(200).send(sales.rows))
            .catch(err => res.send(err))
    })

    app.get('/sales/:id', (req, res) => {
        const {id} = req.params
        DAO.getSaleById(id)
            .then(sale => res.status(200).send(sale.rows))
            .catch(err => res.send(err))
    })

    app.get('/sales/:status', (req, res) => {
        const {status} = req.params
        DAO.getSaleByStatus(status)
            .then(sale => res.status(200).send(sale.rows))
            .catch(err => res.status(404).send(err))
    })

    app.post('/sales', (req, res) => {
        const body = req.body   
        const sale = new SalesModel(0, body.status, body.price, body.id_livro, body.id_cliente)
        DAO.insertSale(sale)
            .then(sale => res.status(201).send(sale))
            .catch(err => res.status(404).send(err))
    })

    app.put('/sales/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        DAO.modifySale(id, body)
            .then(sale => res.status(200).send(`A venda foi alterada com sucesso`))
            .catch(err => res.status(404).send(err))
    })

    app.delete('/sales/:id', (req, res) => {
        const id = req.params.id
        DAO.deleteBook(id)
            .then(sale => res.status(200).send(`A venda foi removida com sucesso`))
            .catch(err => res.status(404).send(err))

    })
}

module.exports = salesController;