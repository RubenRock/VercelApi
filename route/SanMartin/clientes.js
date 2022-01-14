const {Router} = require('express')
const Clientes = require('../../models/SanMartin/Clientes')

const router = Router()

//obtener un dato
router.get('/api/clientes/:id', async (req, res) => {
    let {id} = req.params
    Clientes.findOne({'nombre':id})
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'message':'No se encontro nada', "data":id}))         
})


//obtener todos los datos
router.get('/api/clientes', (req, res) => {    
    Clientes.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/clientes', async (req, res) => {
    await Clientes.insertMany(req.body)    
    res.json({'message':'Saved successful', "data":req.body})  
})

router.delete('/api/clientes/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Clientes.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/clientes/',async (req, res) => {
    try{        
        await Clientes.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/clientes/:id',async (req, res) => {
    let {id} = req.params

    try{        
        await Clientes.update({_id: id}, req.body);
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo actualizar","data: ": id})
   }   
    
    return res.status(200).json({"message:":"actualizacion correcta"})
})

module.exports = router