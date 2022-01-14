const {Router} = require('express')
const Modelo = require('../../models/SanMartin/Reparto')

const router = Router()

//obtener un dato
router.get('/api/reparto/:id', async (req, res) => {
    let {id} = req.params    
    Modelo.find({'folio':id})
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error =>  res.status(500).json({'mensaje':`No se encontro nada para el folio: ${id}`}))         
})


//obtener todos los datos
router.get('/api/reparto', (req, res) => {    
    Modelo.find()
    .exec()
    .then(x => res.status(200).send(x))
    .catch(error => res.status(500).send(error))   

})

router.post('/api/reparto', async (req, res) => {
    await Modelo.insertMany(req.body)    
    res.json({'message':'Saved successful', "data":req.body})  
})

router.delete('/api/reparto/:id',async (req, res) => {
    let { id } = req.params;
    try{        
        await Modelo.deleteOne({_id: id});        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error existente al borrar: ": id})
   }

   return res.status(200).json()
})

router.delete('/api/reparto/',async (req, res) => {
    try{        
        await Modelo.deleteMany();        
    } catch (error) {
        console.log(error)
       return res.status(500).json({"error: ": "no se pudo borrar la coleccion"})
   }   
   return res.status(200).json({"message:":"coleccion eliminada"})
 })

router.put('/api/reparto/:id',async (req, res) => {
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