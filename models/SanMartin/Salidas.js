import {Schema, model} from 'mongoose'

const TablaSalidas =  Schema({
    folio: String,
    cantidad: String,    
    descripcion: String,
    usuario: String,
    fecha: Date
},{
    versionKey: false,
}
)

module.exports = model('Salidas', TablaSalidas)