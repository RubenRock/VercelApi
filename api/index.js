import {coneccion} from '../lib/database'
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

// San Martin
app.use(require('../route/SanMartin/inventario'))
app.use(require('../route/SanMartin/empaque'))
app.use(require('../route/SanMartin/remisiones'))
app.use(require('../route/SanMartin/listaremision'))
app.use(require('../route/SanMartin/listasimilar'))
app.use(require('../route/SanMartin/similares'))
app.use(require('../route/SanMartin/miarroba'))
app.use(require('../route/SanMartin/fecha')) 
app.use(require('../route/SanMartin/clientes')) 
app.use(require('../route/SanMartin/abonos')) 

 // Papeleria
app.use(require('../route/Papeleria/inventario'))
app.use(require('../route/Papeleria/empaque'))
app.use(require('../route/Papeleria/remisiones'))
app.use(require('../route/Papeleria/listaremision'))
app.use(require('../route/Papeleria/listasimilar'))
app.use(require('../route/Papeleria/similares'))
app.use(require('../route/Papeleria/fecha'))

app.get('*',async (req, res) => { 
    res.status(200).json('hola mundo')
<<<<<<< HEAD
})   
=======
}) 
>>>>>>> ab9300565ac38f7b9f620900387d2216a70d948a



module.exports = app