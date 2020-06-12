const express = require("express");
const server = express();

// Importando DB

const db = require("./database/db");


// Pasta Publica
server.use(express.static("public"));

//body na aplicação
server.use(express.urlencoded({
  extended: true
}));


// Template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
});





// Rotas
server.get("/", (req, res) => {
  return res.render("index.html");
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html", {
    saved: true
  });
});



server.post("/savepoint", (req, res) => {
  //console.log(req.body);

  // Inserir dados no DB

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
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items


  ]

  function afterInsertData(err) {
    if (err) {
       console.log(err)
      return res.send('Erro no cadastro!')
      }
    console.log('Cadastrado com sucesso');
    console.log(this);
    return res.send('ok');

  }
  db.run(query, values, afterInsertData);

  return res.render("create-point.html", {saved:true});
});


server.get("/search", (req, res) => {



  // Pegar dados DB

  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }
    const total = rows.length;

    return res.render("search-results.html", {
      places: rows,
      total: total
    });
  });


});


// Port Server
server.listen(3000);