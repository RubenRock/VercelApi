import { Schema, model } from 'mongoose'

const TablaExtras = Schema({
    folio: String,
    razon: String,
    nombre1:String,
    nombre2:String,
    rfc:String,
    direccion:String,   
    telefono: String,
    whatsapp: String,
    inventario:String,
    empaque:String,
    listaRemision: String,
    remisiones: String,
    fecha:String,
    direcFecha:String,
    manejarInventario:String,
    verificarFecha:String,   
    version: String,
    notas: String,
    tiquet:String,
    imprimirEnPantalla:String,
    negocio:String,
    segundaCaja:String
},{
    versionKey: false,
}
)

module.exports = model('Extras', TablaExtras)