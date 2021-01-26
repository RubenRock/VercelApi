const {Router} = require('express')
const fetch = require('node-fetch')

const router = Router()


router.get('/miarroba/inventario', async (req, res) => {
    const response = await fetch('https://mysilver.webcindario.com/Tiendas/SMinventario.json')
    //const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = JSON.stringify(response.headers.Headers)
    console.debug(data)
    res.send('data')
    
})

module.exports = router