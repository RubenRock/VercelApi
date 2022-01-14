import { Schema, model } from 'mongoose'

const TablaListaCortes = Schema({
    folioInicio: String,
    folioFin: String,
    fechaIni:Date,
    fechaFin:Date,
    descuentos:String,
    total:String,   
    contado: String,
    abonos: String,
    devoluciones:String,
    salidas:String,
    usuario: String,
    servicios: String,
    terminal:String,
    transferencia:String,
    cheque:String,
    retiros:String
},{
    versionKey: false,
}
)

module.exports = model('ListaCortes', TablaListaCortes)