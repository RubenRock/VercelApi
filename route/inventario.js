const {Router} = require('express')
const admin = require('firebase-admin')

const router = Router()

var serviceAccount = require("./credentials.json")

//datos obtenidos de google Cloud Firestore, configuracion del proyecto, cuentas de servicio
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), //credentials.json es un archivo que obtuve de : generar nueva clave privada
    databaseURL: "https://prueba-5fb97.firebaseio.com"
})

const db = admin.firestore()


//obtener un dato
router.get('/api/inventario/:product_id', async (req, res) => {
    try {
        const doc = db.collection("SMINVENTARIO").doc(req.params.product_id) //product_id es variable
        const response =  await doc.get()         
        const product = response.data()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

//obtener todos los datos
router.get('/api/inventario', async (req, res) => {
   try {        
     const query = db.collection('SMINVENTARIO')  
     const querySnapshot = await query.get()      
     const docs = querySnapshot.docs      

     const response = docs.map(doc => ({
         //id: doc.id,
         clave: doc.clave,
         producto: doc.data().producto,
         //clave: doc.data().clave,
         iva: doc.data().iva,
         usuario: doc.data().usuario,
         fecha: doc.data().fecha,
         ieps: doc.data().ieps
     }))

     return res.status(200).json(response)
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.post('/api/inventario', async (req, res) => {
  try {
   await db.collection('SMINVENTARIO').doc('/'+req.body.clave +'/')
   .create({
        producto:req.body.producto,       
        iva:  req.body.iva,
        usuario:  req.body.usuario,
        fecha:  req.body.fecha,
        ieps:  req.body.ieps
   })   

   return res.status(204).json()       
  } catch (error) {
      console.log(error)
      return res.status(500).send(error)
      
  }
})

router.delete('/api/inventario/:product_id',async (req, res) => {
   try {
       const doc = db.collection('SMINVENTARIO').doc(req.params.product_id)
       await doc.delete()
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.put('/api/inventario/:product_id',async (req, res) => {
   try {
       const doc = db.collection('SMINVENTARIO').doc(req.params.product_id)
       await doc.update({
            producto:req.body.producto,
            iva:  req.body.iva,
            usuario:  req.body.usuario,
            fecha:  req.body.fecha,
            ieps:  req.body.ieps  
       })
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

module.exports = router