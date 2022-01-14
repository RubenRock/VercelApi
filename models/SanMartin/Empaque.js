const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaEmpaque =  Schema({
    empaque: String,
    precio: String,
    piezas: String,
    barras: String,       
    clave:String,
    id:String,
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Empaque', TablaEmpaque)