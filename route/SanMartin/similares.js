const {Router} = require('express')
const Similares = require('../../models/SanMartin/Similares')


const router = Router()

//obtener un dato
router.get('/api/similares/:id', async (req, res) => {
    let {id} = req.params
    Similares.findById(id)
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'message':'No se encontro nada', "data":id}))         
})


//obtener todos los datos
router.get('/api/similares', (req, res) => {
    Similares.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/similares', async (req, res) => {
    await Similares.insertMany(req.body)    
    res.json({'message':'Saved successful', "data":req.body})  
})

router.delete('/api/similares/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Similares.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/similares/',async (req, res) => {
    try{        
        await Similares.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/similares/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await Similares.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router