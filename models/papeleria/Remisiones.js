const {Schema, model} = require('mongoose')

const TablaRemisiones = new Schema({
    folio: String,
    id:String,
    cantidad: String,
    producto:String,
    total: String,
    tipo:String,
    empaque:String,
    descuento:String, 
},{
    versionKey: false,
}
)

module.exports = model('Papel_Remisiones', TablaRemisiones)