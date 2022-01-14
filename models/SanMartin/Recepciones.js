const {Schema, model} = require('mongoose')

const TablaRecepciones = new Schema({
    folio: String,    
    cantidad: String,
    producto:String,
    total: String,
    proveedor:String,
    empaque:String, 
    clave: String,
    clave_empaque: String
},{
    versionKey: false,
}
)

module.exports = model('Recepciones', TablaRecepciones)