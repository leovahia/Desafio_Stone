module.exports = class UsersModel {
    constructor(id, name, email, password, cep) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cep = cep;
    }
}