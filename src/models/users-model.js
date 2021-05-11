module.exports = class UsersModel {
    constructor(id, nome, email, senha, cep) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cep = cep;
    }
}