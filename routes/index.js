const express = require('express')

const routes = express.Router()

routes.get("/", (req, res) => {
    res.send("Olá fagner!");
   
   });
   
  routes.post("/cadastrar", (req,res) => {
    console.log(req.body);
    res.json(req.body);
  }) 
module.exports = routes;