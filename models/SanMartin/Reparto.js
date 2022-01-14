import {Schema, model} from 'mongoose';

const TablaReparto =  Schema({
    folio: String,
    cliente: String,
    condicion: String,
    total:String,
    id:String,
    descripcion: String,
    adicional:String
    
},{
    //timestamps:true,  //crea en automatico fecha de creacion y de modificacion
    versionKey: false,
}
)

module.exports = model('Reparto', TablaReparto)