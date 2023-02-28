const express = require('express')


const db = require('./utils/database')
const ToDo = require('./models/todo.models')

const cors = require('cors');
const todoRouter = require("./Routes/todo.routes")

const PORT = '4000'
const app = express()
ToDo;
app.use(express.json())
app.use(todoRouter)
app.use(cors())

db.authenticate()
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error));
db.sync()
    .then(() => {
        console.log('Bae Sincronizada')
    })
    .catch((error) => {
        console.log(error)
    })


app.get("/", (req, res) => {
    res.send("Bienvenido al Servidor")
})

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})
