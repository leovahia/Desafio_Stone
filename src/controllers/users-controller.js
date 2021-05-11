const UsersModel = require('../models/users-model')
const UsersDAO = require('../DAO/users-dao')

function salesController(app, db) {
    const DAO = new UsersDAO(db)
    app.get('/users', (req, res) => {
        DAO.getUsers()
            .then(users => res.send(users))
            .catch(err => res.send(err))
    })

    app.get('/users/:id', (req, res) => {
        const {id} = req.params
        DAO.getUserById(id)
            .then(user => res.send(user))
            .catch(err => res.send(err))
    })


    app.post('/users', (req, res) => {
        const body = req.body   
        const user = new UsersModel(0, body.status, body.description)
        DAO.insertUser(user)
            .then(user => res.send(user))
            .catch(err => res.send(err))
    })

    app.put('/users/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        DAO.modifyUser(id, body)
            .then(sale => res.send(`O usuário foi alterado com sucesso`))
            .catch(err => res.send(err))

    })
}

module.exports = salesController;