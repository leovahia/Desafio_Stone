module.exports = class BooksModel {
    constructor(id, image, title, author, category, price) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.author = author;
        this.category = category;
        this.price = price;
    }
}