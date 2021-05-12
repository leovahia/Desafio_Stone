module.exports = class UsersDAO {

    constructor(bd) {
        this.bd = bd;
    }

    getUsers() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM CLIENTES',
            (err, user) => {
                if(err) rej(err)     
                else res(user) 
            })

        } 
    )}

    getUserById(id) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM CLIENTES WHERE ID = (?)',
            [id],
            (err, usuario) => {
                if(err) rej(err)
                else res(usuario)
            })
        })
    }

    insertUser(user) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO CLIENTES (NOME, EMAIL, SENHA, CEP) VALUES (?, ?, ?, ?)'
            , [user.name, user.email, user.password, user.cep]
            , (err) => {
                if(err) rej('Falha ao inserir o usuario')
                else res('Usuário cadastrado com sucesso')
            })
        })
    }

    modifyUser(user, body) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE CLIENTES SET NOME = (?), EMAIL = (?) WHERE ID = (?)'
            , [body.descricao, body.status, user ]
            , (err) => {
                if(err) rej('Falha ao alterar o usuário')
                else res('Usuário alterado com sucesso')
            })
        })
    }

    deleteUser(user) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM CLIENTES WHERE ID = (?)'
            , [user]
            , (err) => {
                if(err) rej('Falha ao deletar o usuário')
                else res('Usuário deletado com sucesso')
            })
        })
    }
}