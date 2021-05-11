const SalesModel = require('../models/sales-model')
const SalesDAO = require('../DAO/sales-dao')

function salesController(app, db) {
    const DAO = new SalesDAO(db)
    app.get('/sales', (req, res) => {
        DAO.getSales()
            .then(sales => res.send(sales))
            .catch(err => res.send(err))
    })

    app.get('/sales/:id', (req, res) => {
        const {id} = req.params
        DAO.getSaleById(id)
            .then(sale => res.send(sale))
            .catch(err => res.send(err))
    })

    app.get('/sales/:status', (req, res) => {
        const {id} = req.params
        DAO.getSaleByStatus(id)
            .then(sale => res.send(sale))
            .catch(err => res.send(err))
    })

    app.post('/sales', (req, res) => {
        const body = req.body   
        const sale = new SalesModel(0, body.status, body.description)
        DAO.insertSale(book)
            .then(sale => res.send(sale))
            .catch(err => res.send(err))
    })

    app.put('/sales/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        DAO.modifySale(id, body)
            .then(sale => res.send(`A venda foi alterada com sucesso`))
            .catch(err => res.send(err))

    })
}

module.exports = salesController;