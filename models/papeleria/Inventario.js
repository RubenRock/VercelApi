const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaInventario =  Schema({
    producto: String,
    clave: String,    
    iva: String,
    usuario: String,
    fecha: String,
    ieps: String,
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Papel_Inventario', TablaInventario)