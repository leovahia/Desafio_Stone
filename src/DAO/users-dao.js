module.exports = class UsersDAO {

    constructor(bd) {
        this.bd = bd;
    }

    getUsers() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM USERS',
            (err, user) => {
                if(err) rej(err)     
                else res(user) 
            })

        } 
    )}

    getUserById(id) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM USERS WHERE ID = (?)',
            [id],
            (err, usuario) => {
                if(err) rej(err)
                else res(usuario)
            })
        })
    }

    insertUser(user) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO USERS (NAME, EMAIL, ZIP CODE) VALUES (?, ?, ?)'
            , [user.name, user.email, user.zipCode]
            , (err) => {
                if(err) rej('Falha ao inserir o usuario')
                else res('Usuário cadastrado com sucesso')
            })
        })
    }

    modifyUser(user, body) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE USERS SET NAME = (?), EMAIL = (?), ZIP CODE = (?) WHERE ID = (?)'
            , [body.name, body.email, body.zipCode, user ]
            , (err) => {
                if(err) rej('Falha ao alterar o usuário')
                else res('Usuário alterado com sucesso')
            })
        })
    }

    deleteUser(user) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM USERS WHERE ID = (?)'
            , [user]
            , (err) => {
                if(err) rej('Falha ao deletar o usuário')
                else res('Usuário deletado com sucesso')
            })
        })
    }
}