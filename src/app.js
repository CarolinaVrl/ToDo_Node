const express = require('express')
const db = require('./utils/database')
const PORT = 4000


const app = express()

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));