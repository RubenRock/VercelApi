const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaFecha =  Schema({
    fecha: String,
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Fecha', TablaFecha)