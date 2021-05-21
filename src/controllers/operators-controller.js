const OperatorsModel = require('../models/operators-model')
const OperatorsDAO = require('../DAO/operators-dao')
const { encryptPassword } = require('../config/encryptPassword')

function operatorsController(app, pool) {
    const DAO = new OperatorsDAO(pool)
    app.get('/operators', (req, res) => {
        DAO.getOperators()
            .then(operators => res.status(200).send(operators.rows))
            .catch(err => res.status(404).send(err))
    })

    app.get('/operators/:id', (req, res) => {
        const {id} = req.params
        DAO.getOperatorById(id)
            .then(operator => res.status(200).send(operator.rows))
            .catch(err => res.status(404).send(err))
    })

    app.post('/operators', (req, res) => {
        const body = req.body
        const password = encryptPassword(body.password)
        const operator = new OperatorsModel(0, body.name, body.email, password)    
        DAO.insertOperator(operator)
            .then(operator => res.status(201).send(operator))
            .catch(err => res.status(404).send(err))
    })

    app.delete('/operators/:id', (req, res) => {
        const id = req.params.id
        DAO.deleteOperator(id)
            .then(operator => res.status(200).send(`Livro removido com sucesso`))
            .catch(err =>  res.status(404).send(err))
    })
}

module.exports = operatorsController;