const {Router} = require('express')
const ListaSimilar = require('../models/Listasimilar')


const router = Router()

//obtener un dato
router.get('/api/listasimilar/:id', async (req, res) => {
    let {id} = req.params
    ListaSimilar.findById(id)
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'message':'No se encontro nada', "data":id}))         
})


//obtener todos los datos
router.get('/api/listasimilar', (req, res) => {
    ListaSimilar.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/listasimilar', async (req, res) => {
    await ListaSimilar.insertMany(req.body)    
    res.json({'message':'Saved successful', "data":req.body})  
})

router.delete('/api/listasimilar/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await ListaSimilar.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/listasimilar/',async (req, res) => {
    try{        
        await ListaSimilar.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/listasimilar/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await ListaSimilar.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router