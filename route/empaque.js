const {Router} = require('express')
const admin = require('firebase-admin')

const router = Router()

const db = admin.firestore()


//obtener un dato
router.get('/api/empaque/:empaque_id', async (req, res) => {
    try {
        const doc = db.collection("SMEMPAQUE").doc(req.params.empaque_id) //product_id es variable
        const response =  await doc.get()         
        const product = response.data()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

//obtener todos los datos
router.get('/api/empaque', async (req, res) => {
    try {        
     const query = db.collection('SMEMPAQUE')  
     const querySnapshot = await query.get()      
     const docs = querySnapshot.docs      

     const response = docs.map(doc => ({         
         clave: doc.clave,
         empaque: doc.data().empaque,
         precio: doc.data().precio,
         piezas: doc.data().piezas,
         barras: doc.data().barras,
         id: doc.data().id
     }))

     return res.status(200).json(response)
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.post('/api/empaque', async (req, res) => {
  try {
   await db.collection('SMEMPAQUE').doc('/'+req.body.clave +'/')
   .create({
        empaque: req.body.empaque,
        precio: req.body.precio,
        piezas: req.body.piezas,
        barras: req.body.barras,
        id: req.body.id
   })   

   return res.status(204).json()       
  } catch (error) {
      console.log(error)
      return res.status(500).send(error)
      
  }
})

router.delete('/api/empaque/:empaque_id',async (req, res) => {
   try {
       const doc = db.collection('SMEMPAQUE').doc(req.params.empaque_id)
       await doc.delete()
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.put('/api/empaque/:empaque_id',async (req, res) => {
   try {
       const doc = db.collection('SMEMPAQUE').doc(req.params.empaque_id)
       await doc.update({
        empaque: req.body.empaque,
        precio: req.body.precio,
        piezas: req.body.piezas,
        barras: req.body.barras
       })
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

module.exports = router