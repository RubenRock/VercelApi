const express = require('express')
const app = express()
const bodyparse = require('body-parser')
const  cors = require('cors')

// const admin = require('firebase-admin')
// var serviceAccount = require("./credentials.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://prueba-5fb97.firebaseio.com"
//   });

// const db = admin.firestore()



app.use(bodyparse.json())
app.use(cors())

app.get('/api/hello',(req, res) => {
    res.status(200).json('hola desde hello')
}) 

app.use(require('../route/inventario'))
app.use(require('../route/empaque'))

app.get('*',(req, res) => {    
    res.status(200).json('hola mundo')
}) 



module.exports = app