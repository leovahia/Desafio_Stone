const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//==== Usuários
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(64),
    "TITLE" varchar(64),
    "AUTOR" varchar(64),
    "PRECO" varchar(64)
  );`;

function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de livros");
    });
}

db.serialize( () => {
    criaTabelaLivros();
});