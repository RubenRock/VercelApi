const {Router} = require('express')
const admin = require('firebase-admin')

const router = Router()

const db = admin.firestore()


//obtener un dato
router.get('/api/listaremision/:remision_id', async (req, res) => {
    try {
        const doc = db.collection("SMLISTAREMISION").doc(req.params.remision_id) //product_id es variable
        const response =  await doc.get()         
        const product = response.data()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

//obtener todos los datos
router.get('/api/listaremision', async (req, res) => {
    try {        
     const query = db.collection('SMLISTAREMISION')  
     const querySnapshot = await query.get()      
     const docs = querySnapshot.docs      

     const response = docs.map(doc => ({         
        folio: doc.id,        
        cliente: doc.data().cliente,        
        total: doc.data().total,
        fecha: doc.data().fecha,
        vendedor: doc.data().vendedor,
        condicion: doc.data().condicion,
        estado: doc.data().estado,
        domicilio: doc.data().domicilio,
        impresion: doc.data().impresion,
        descuento: doc.data().descuento
     }))

     return res.status(200).json(response)
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.post('/api/listaremision', async (req, res) => {
  try {
   await db.collection('SMLISTAREMISION').doc('/'+req.body.folio +'/')
   .create({
        cliente: req.body.cliente,        
        total: req.body.total,       
        fecha: req.body.fecha,
        vendedor:req.body.vendedor,
        condicion:req.body.condicion,
        estado:req.body.estado,
        domicilio:req.body.domicilio,
        impresion:req.body.impresion,
        descuento:req.body.descuento
   })   

   return res.status(204).json()       
  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
      
  }
})

router.delete('/api/listaremision/:remision_id',async (req, res) => {
   try {
       const doc = db.collection('SMLISTAREMISION').doc(req.params.remision_id)
       await doc.delete()
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.put('/api/listaremision/:remision_id',async (req, res) => {
   try {
       const doc = db.collection('SMLISTAREMISION').doc(req.params.remision_id)
       await doc.update({
        cliente: req.body.cliente,        
        total: req.body.total,       
        fecha: req.body.fecha,
        vendedor:req.body.vendedor,
        condicion:req.body.condicion,
        estado:req.body.estado,
        domicilio:req.body.domicilio,
        impresion:req.body.impresion,
        descuento:req.body.descuento      
       })
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

module.exports = router