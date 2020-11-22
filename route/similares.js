const {Router} = require('express')
const admin = require('firebase-admin')

const router = Router()

const db = admin.firestore()


//obtener un dato
router.get('/api/similares/:similares_id', async (req, res) => {
    try {        
        const doc = db.collection("SMSIMILARES").doc(req.params.similares_id) //product_id es variable
        const response =  await doc.get()         
        const product = response.data()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

//obtener todos los datos
router.get('/api/similares', async (req, res) => {
    try {                
        const query = db.collection('SMSIMILARES')  
        const querySnapshot = await query.get()      
        const docs = querySnapshot.docs      

        const response = docs.map(doc => ({         
            id: doc.id,
            clave:doc.data().clave,
            producto: doc.data().producto
        }))

        return res.status(200).json(response)
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.post('/api/similares', async (req, res) => {
  try {
    await db.collection('SMSIMILARES').doc('/'+req.body.id +'/')
    .create({
            clave: req.body.clave,        
            producto: req.body.producto
    })   

    return res.status(204).json()       
  } catch (error) {
      console.log(error)
      return res.status(500).send(error)
      
  }
})

router.delete('/api/similares/:similares_id',async (req, res) => {
   try {
       const doc = db.collection('SMSIMILARES').doc(req.params.similares_id)
       await doc.delete()
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

router.delete('/api/similares/',async (req, res) => {
    try {
        const query = db.collection('SMSIMILARES')  
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

router.put('/api/similares/:similares_id',async (req, res) => {
   try {
       const doc = db.collection('SMSIMILARES').doc(req.params.similares_id)
       await doc.update({        
        producto: req.body.producto
       })
       return res.status(200).json()
   } catch (error) {
       return res.status(500).send(error)
   }
})

module.exports = router