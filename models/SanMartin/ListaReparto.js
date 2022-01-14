import {Schema, model} from 'mongoose';

const TablaListaRepartos =  Schema({
    folio: String,
    repartidor: String,
    fecha: String,
    estado: String,
    total:String
},{
    //timestamps:true,  //crea en automatico fecha de creacion y de modificacion
    versionKey: false,
}
)

module.exports = model('ListaRepartos', TablaListaRepartos)