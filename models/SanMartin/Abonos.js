const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaAbonos =  Schema({
    folio: String,
    cliente: String,    
    total: String,
    fecha: Date,
    condicion: String,
    usuario: String,
    metodo: String
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Abonos', TablaAbonos)