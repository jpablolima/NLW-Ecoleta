const express = require("express");
const server = express();

// Importando DB

const db = require("./database/db");


// Pasta Publica
server.use(express.static("public"));



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
  return res.render("create-point.html");
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
      total:total
    });
  });


});


// Port Server
server.listen(3000);