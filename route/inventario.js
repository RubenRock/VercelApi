const {Router} = require('express')
const Inventario = require('../models/Inventario')

const router = Router()

//obtener un dato
router.get('/api/inventario/:id', async (req, res) => {
    let {id} = req.params
    Inventario.findById(id)
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'message':'No se encontro nada', "data":id}))         
})


//obtener todos los datos
router.get('/api/inventario', (req, res) => {
    Inventario.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/inventario', async (req, res) => {
    await Inventario.insertMany(req.body)    
    res.json({'message':'Saved successful', "data":req.body})  
})

router.delete('/api/inventario/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Inventario.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/inventario/',async (req, res) => {
    try{        
        await Inventario.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/inventario/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await Inventario.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router