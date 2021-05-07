module.exports = class BooksModel {
    constructor(id, image, title, author, price) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}