module.exports = class SalesModel {
    constructor(id, status, price, id_book, id_user) {
        this.id = id;
        this.status = status;
        this.price = price;
        this.id_book = id_book;
        this.id_user = id_user;
    }
}