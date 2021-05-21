module.exports = class UsersDAO {

    constructor(pool) {
        this.pool = pool;
    }

    getUsers() {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM users',
            (err, user) => {
                if(err) rej(err)     
                else res(user) 
            })

        } 
    )}

    getUserById(id) {
        return new Promise((res, rej) => {
            this.pool.query('SELECT * FROM users WHERE id = $1',
            [id],
            (err, usuario) => {
                if(err) rej(err)
                else res(usuario)
            })
        })
    }

    insertUser(user) {
        return new Promise((res, rej) => {
            this.pool.query('INSERT INTO users (name, email, zipcode) VALUES ($1, $2, $3)'
            , [user.name, user.email, user.zipCode]
            , (err) => {
                if(err) rej('Falha ao inserir o usuario')
                else res('Usuário cadastrado com sucesso')
            })
        })
    }

    modifyUser(user, body) {
        return new Promise((res, rej) => {
            this.pool.query('UPDATE users SET name = $1, email = $2, zipcode = $3 WHERE ID = $4'
            , [body.name, body.email, body.zipCode, user ]
            , (err) => {
                if(err) rej('Falha ao alterar o usuário')
                else res('Usuário alterado com sucesso')
            })
        })
    }

    deleteUser(user) {
        return new Promise((res, rej) => {
            this.pool.query('DELETE FROM users WHERE ID = $1'
            ,[user]
            , (err) => {
                if(err) rej('Falha ao deletar o usuário')
                else res('Usuário deletado com sucesso')
            })
        })
    }
}