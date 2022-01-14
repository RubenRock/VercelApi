import { Schema, model } from 'mongoose'

const TablaDevoluciones = new Schema({
    folio: String,
    cliente:String,
    total: String,
    fecha:Date,
    condicion: String,
    usuario: String,
    metodo:String
},{
    versionKey: false,
}
)

export default model('Devoluciones', TablaDevoluciones)