const {Router} = require('express')
const admin = require('firebase-admin')

const router = Router()

const db = admin.firestore()


//obtener un dato
router.get('/api/listasimilar/:similar_id', async (req, res) => {
    try {
        const doc = db.collection("SMLISTASIMILAR").doc(req.params.similar_id) //product_id es variable
        const response =  await doc.get()         
        const product = response.data()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

//obtener todos los datos
router.get('/api/listasimilar', async (req, res) => {
    try {        
     const query = db.collection('SMLISTASIMILAR')  
     const querySnapshot = await query.get()      
     const docs = querySnapshot.docs      

     const response = docs.map(doc => ({         
        clave: doc.id,        
        descripcion: doc.data().descripcion
     }))

     return res.status(200).json(response)
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.post('/api/listasimilar', async (req, res) => {
  try {      
   await db.collection('SMLISTASIMILAR').doc('/'+req.body.clave +'/')
   .create({
        descripcion: req.body.descripcion
   })   

   return res.status(204).json()       
  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
      
  }
})

router.delete('/api/listasimilar/:similar_id',async (req, res) => {
   try {
       const doc = db.collection('SMLISTASIMILAR').doc(req.params.similar_id)
       await doc.delete()
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.delete('/api/listasimilar/',async (req, res) => {
    try {
     /*    const query = db.collection('SMLISTASIMILAR')  
        const querySnapshot = await query.get()      
        const docs = querySnapshot.docs      
   
        docs.forEach(async doc => {
            const document = db.collection('SMLISTAREMISION').doc(doc.id)
            await document.delete()  
        }) */
        const query = db.collection('SMLISTASIMILAR')  
        const querySnapshot = await query.get() 

        let batch = db.batch()

        querySnapshot.docs.forEach((doc) => {
            batch.delete(doc.ref);
          })

          batch.commit()

        return res.status(200).json()
    } catch (error) {
        return res.status(500).send(error)
    }
 })

router.put('/api/listasimilar/:similar_id',async (req, res) => {
   try {
       const doc = db.collection('SMLISTASIMILAR').doc(req.params.similar_id)
       await doc.update({
        descripcion: req.body.descripcion     
       })

       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

module.exports = router