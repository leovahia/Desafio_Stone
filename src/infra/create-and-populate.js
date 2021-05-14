const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== LIVROS
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(128),
    "TITULO" varchar(64),
    "AUTOR" varchar(64),
    "CATEGORIA" varchar(32),
    "PRECO" varchar(32)
);`;

const ADD_LIVROS_DATA = `
INSERT INTO LIVROS (ID, IMAGEM, TITULO, AUTOR, CATEGORIA, PRECO)
VALUES
    (
        1,
        'http://books.google.com/books/content?id=11h7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        'Harry Potter',
        'J.K Rowling',
        'Ficção',
        '50.00'
    )
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
    "STATUS" varchar(64),
    "PRECO" varchar(15),
    "ID_LIVRO" integer,
    "ID_CLIENTE" integer,
    FOREIGN KEY(ID_LIVRO) REFERENCES LIVROS(ID),
    FOREIGN KEY(ID_CLIENTE) REFERENCES CLIENTES(ID)
);`;

const ADD_VENDAS_DATA = `
INSERT INTO VENDAS (ID, STATUS, PRECO, ID_CLIENTE, ID_LIVRO )
VALUES
    (
        1,
        'Efetivada',
        '50.00',
        1,
        1
    )
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

// CLIENTES
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "CEP" varchar(9)
);`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, SENHA, CEP)
VALUES
    (   
        1,
        'Matheus Dias',
        'matheus@hotmail.com',
        'matheus5',
        '09090640'
    )
`

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de clientes");
    });
}

function populaTabelaClientes() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de clientes");
    });
}

db.serialize( () => {
    criaTabelaLivros();
    populaTabelaLivros();
    criaTabelaVendas();
    populaTabelaVendas();
    criaTabelaClientes();
    populaTabelaClientes();
});