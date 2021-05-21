const UsersModel = require('../models/users-model')
const UsersDAO = require('../DAO/users-dao')

function salesController(app, db) {
    const DAO = new UsersDAO(db)
    app.get('/users', (req, res) => {
        DAO.getUsers()
            .then(users => res.status(200).send(users.rows))
            .catch(err => res.status(404).send(err))
    })

    app.get('/users/:id', (req, res) => {
        const {id} = req.params
        DAO.getUserById(id)
            .then(user => res.status(200).send(user.rows))
            .catch(err => res.status(404).send(err))
    })

    app.post('/users', (req, res) => {
        const body = req.body   
        const user = new UsersModel(0, body.name, body.email, body.zipCode)
        DAO.insertUser(user)
            .then(user => res.status(201).send(user))
            .catch(err => res.status(404).send(err))
    })

    app.put('/users/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        DAO.modifyUser(id, body)
            .then(sale => res.status(200).send(`O usuário foi alterado com sucesso`))
            .catch(err => res.status(404).send(err))
    })

    app.delete('/users/:id', (req, res) => {
        const { id } = req.params
        DAO.deleteUser(id)
            .then(user => res.status(200).send(`Usuário removido com sucesso`))
            .catch(err =>  res.status(404).send(`Falha ao remover o usuário`))
    })
}

module.exports = salesController;