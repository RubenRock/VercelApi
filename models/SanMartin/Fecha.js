const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaFecha =  Schema({
    fecha: String,
    fecha_anterior: String,
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Fecha', TablaFecha)