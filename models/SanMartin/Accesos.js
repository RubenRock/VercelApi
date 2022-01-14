const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TablaAccesos =  Schema({
    login: String,
    acceso: String
},{
    versionKey: false,
}
)

module.exports = mongoose.model('Accesos', TablaAccesos)