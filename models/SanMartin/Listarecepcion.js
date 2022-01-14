import {Schema, model} from 'mongoose';

const TablaListaRecepcion =  Schema({
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
    timestamps:true,  //crea en automatico fecha de creacion y de modificacion
    versionKey: false,
}
)

module.exports = model('ListaRecepcion', TablaListaRecepcion)