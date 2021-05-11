const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== LIVROS
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(64),
    "TITULO" varchar(64),
    "AUTOR" varchar(64),
    "PRECO" varchar(64)
);`;

const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (ID, IMAGEM, TITULO, AUTOR, PRECO)
VALUES
    (1, 'http://books.google.com/books/content?id=11h7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Harry Potter',
    'J.K Rowling', '50.00')
`

function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de livros");
    });
}

function populaTabelaLivros() {
    db.run(ADD_LIVROS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de livros");
    });
}


// VENDAS
const VENDAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "VENDAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(64),
    "TITULO" varchar(64)
);`;

const ADD_VENDAS_DATA = `
INSERT INTO LIVROS (ID, IMAGEM, TITULO, AUTOR, PRECO)
VALUES
    (1,
    'http://books.google.com/books/content?id=11h7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    'Harry Potter',
    'J.K Rowling',
    '50.00')
`

function criaTabelaVendas() {
    db.run(VENDAS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de vendas");
    });
}

function populaTabelaVendas() {
    db.run(ADD_VENDAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de vendas");
    });
}

// USUARIOS
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(64),
    "TITULO" varchar(64)
);`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (ID, IMAGEM, TITULO, AUTOR, PRECO)
VALUES
    (1,
    'http://books.google.com/books/content?id=11h7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    'Harry Potter',
    'J.K Rowling',
    '50.00')
`

function criaTabelaUsuarios() {
    db.run(USUARIOS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaUsuarios() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}








db.serialize( () => {
    criaTabelaLivros();
    criaTabelaVendas();
    criaTabelaUsuarios();
    populaTabelaLivros();
    populaTabelaVendas();
    populaTabelaUsuarios();
});