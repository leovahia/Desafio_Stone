module.exports = class UsersDAO {

    constructor(bd) {
        this.bd = bd;
    }

    getUsers() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM USUARIOS',
            (err, user) => {
                if(err) rej(err)     
                else res(user) 
            })

        } 
    )}

    getUserById(id) {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM USUARIOS WHERE ID = (?)',
            [id],
            (err, usuario) => {
                if(err) rej(err)
                else res(usuario)
            })
        })
    }

    insertUser(user) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA, CEP) VALUES (?, ?, ?, ?)'
            , [user.nome, user.email, user.senha, user.cep]
            , (err) => {
                if(err) rej('Falha ao inserir o usuario')
                else res('Usuário cadastrado com sucesso')
            })
        })
    }

    modifyUser(user, body) {
        return new Promise((res, rej) => {
            this.bd.run('UPDATE VENDAS SET NOME = (?), EMAIL = (?) WHERE ID = (?)'
            , [body.descricao, body.status, user ]
            , (err) => {
                if(err) rej('Falha ao alterar o usuário')
                else res('Usuário alterado com sucesso')
            })
        })
    }

    deleteUser(user) {
        return new Promise((res, rej) => {
            this.bd.run('DELETE FROM USUARIOS WHERE ID = (?)'
            , [user]
            , (err) => {
                if(err) rej('Falha ao deletar o usuário')
                else res('Usuário deletado com sucesso')
            })
        })
    }
}