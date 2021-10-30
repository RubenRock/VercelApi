const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaClientes =  Schema({
    nombre: String,
    apellidos: String,    
    direccion: String,
    telefono: String,
    email: String,
    credito: String,
    multicredito: String,
    id: String,
    tienda: String
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Clientes', TablaClientes)