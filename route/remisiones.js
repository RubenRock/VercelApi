const {Router} = require('express')
const admin = require('firebase-admin')

const router = Router()

const db = admin.firestore()


//obtener un dato
router.get('/api/remisiones/:remision_id', async (req, res) => {
    try {
        const doc = db.collection("SMREMISIONES").doc(req.params.remision_id) //product_id es variable
        const response =  await doc.get()         
        const product = response.data()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

//obtener todos los datos
router.get('/api/remisiones', async (req, res) => {
    try {        
     const query = db.collection('SMREMISIONES')  
     const querySnapshot = await query.get()      
     const docs = querySnapshot.docs      

     const response = docs.map(doc => ({         
        id: doc.id,
        folio: doc.data().folio,
        cantidad: doc.data().cantidad,
        producto: doc.data().producto,
        total: doc.data().total,
        tipo: doc.data().tipo,
        empaque: doc.data().empaque,
        descuento: doc.data().descuento
     }))

     return res.status(200).json(response)
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.post('/api/remisiones', async (req, res) => {
  try {
   await db.collection('SMREMISIONES').doc('/'+req.body.id +'/')
   .create({
        folio: req.body.folio,
        cantidad: req.body.cantidad,
        producto: req.body.producto,
        total: req.body.total,       
        tipo:req.body.tipo,
        empaque:req.body.empaque,
        descuento:req.body.descuento
   })   

   return res.status(204).json()       
  } catch (error) {
      console.log(error)
      return res.status(500).send(error)
      
  }
})

router.delete('/api/remisiones/:remision_id',async (req, res) => {
   try {
       const doc = db.collection('SMREMISIONES').doc(req.params.remision_id)
       await doc.delete()
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.put('/api/remisiones/:remision_id',async (req, res) => {
   try {
       const doc = db.collection('SMREMISIONES').doc(req.params.remision_id)
       await doc.update({
        cantidad: req.body.cantidad,
        producto: req.body.producto,
        total: req.body.total,       
        tipo:req.body.tipo,
        empaque:req.body.empaque,
        descuento:req.body.descuento        
       })
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

module.exports = router