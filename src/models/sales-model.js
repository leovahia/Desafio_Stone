module.exports = class SalesModel {
    constructor(id, status, price, id_cliente, id_livro) {
        this.id = id;
        this.status = status;
        this.price = price;
        this.id_cliente = id_cliente;
        this.id_livro = id_livro;
    }
}