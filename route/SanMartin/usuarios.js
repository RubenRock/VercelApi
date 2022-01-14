const {Router} = require('express')
const Modelo = require('../../models/SanMartin/Usuarios')

const router = Router()
console.log('usuarios')
//obtener un dato
router.get('/api/usuarios/:id', async (req, res) => {
    let {id} = req.params    
    Modelo.find({'login':id})
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'mensaje':`No se encontro nada para el folio: ${id}`}))         
})


//obtener todos los datos
router.get('/api/usuarios', (req, res) => {    
    Modelo.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/usuarios', async (req, res) => {
    try {
        await Modelo.insertMany(req.body)    
        res.json({'message':'Saved successful', "data":req.body})        
    } catch (error) {
        return res.status(500).json({"error existente al guardar: ": error.message})
        
    }
      
})

router.delete('/api/usuarios/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Modelo.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/usuarios/',async (req, res) => {
    try{        
        await Modelo.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/usuarios/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await Modelo.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router