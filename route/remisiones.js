const {Router} = require('express')
const Remision = require('../models/Remisiones')

const router = Router()


//obtener un dato
router.get('/api/remisiones/:id', (req, res) => {
    let {id} = req.params
        Remision.findById(id)
        .exec()
        .then(x => res.status(200).send(x))
        .catch(error =>  res.status(500).json({'message':'No se encontro nada', "data":id}))         
    })

//obtener todos los datos
router.get('/api/remisiones', (req, res) => {
    Remision.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/remisiones', async (req, res) => {
    try{
        await Remision.insertMany(req.body)            
    } catch (error) {
        return res.status(500).send(error)
    }    
    res.status(204).json({'message':'Saved successful', "data":req.body}) 
      
})

router.delete('/api/remisiones/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Remision.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/remisiones/',async (req, res) => {
    try{        
        await Remision.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/remisiones/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await Remision.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router