// Import sqlite3
const sqlite3 = require("sqlite3").verbose();

// criação DB
const db = new sqlite3.Database('./src/database/database.db');


module.exports = db;


// Criação de tabela 
//Inserir Dados 
//Consultar Dados
// Deletar Dados

/* db.serialize(() => {


  db.run(` 
  CREATE TABLE IF  NOT EXISTS places(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    name TEXT,
    address TEXT,
    address2 TEXT,
    state TEXT,
    city TEXT,
    items TEXT
    
  );
`)
  const query = `
INSERT INTO places(
  image ,
  name ,
  address ,
  address2 ,
  state ,
  city ,
  items 
) VALUES(?,?,?,?,?,?,?);
  `
  const values = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=874&q=80",
    "Clear",
    "Jardim America",
    "Número 260",
    "Santa Catarina",
    "Florianopolis",
    "Resíduos Eletrônicos, Lâmpadas"
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }
    console.log('Cadastrado com sucesso');
    console.log(this);
  }

  db.run(query, values, afterInsertData)
  /*   db.all(`SELECT * FROM places`, function (err, rows) {
      if (err) {
        return console.log(err)
      }
      console.log('Seus Registros');
      console.log(rows);
    });
    db.run(`DELETE FROM places WHERE id = ? `, [1], function (err){
        if (err) {
          return console.log(err)
        }
        console.log('Registro Deletado com sucesso')
    });  

}); */