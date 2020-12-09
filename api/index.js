import {coneccion} from '../lib/database'
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyparse = require('body-parser')
const  cors = require('cors')

app.use(bodyparse.json())
app.use(cors())

coneccion();

app.get('/api/hello',(req, res) => {
    res.status(200).json('hola desde hello')
}) 

app.use(require('../route/inventario'))
app.use(require('../route/empaque'))
app.use(require('../route/remisiones'))
app.use(require('../route/listaremision'))
app.use(require('../route/listasimilar'))
app.use(require('../route/similares'))
app.use(require('../route/miarroba'))

app.get('*',async (req, res) => {    
    const db = await coneccion()
    res.status(200).json('hola mundo')
}) 



module.exports = app