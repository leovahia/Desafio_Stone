module.exports = class SalesModel {
    constructor(id, status, description, price, id_livro, id_cliente) {
        this.id = id;
        this.status = status;
        this.description = description;
        this.price = price;
        this.id_livro = id_livro;
        this.id_cliente = id_cliente;
    }
}