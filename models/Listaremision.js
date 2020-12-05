const {Schema, model} = require('mongoose')

const TablaListaRemsion = new Schema({
    folio: String,
    cliente: String,
    total: String,
    fecha: String,
    vendedor:String,
    condicion:String,
    estado:String,
    domicilio:String,
    impresion:String,
    descuento:String,   
},{
    timestamps:true  //crea en automatico fecha de creacion y de modificacion
}
)

module.exports = model('ListaRemision', TablaListaRemsion)