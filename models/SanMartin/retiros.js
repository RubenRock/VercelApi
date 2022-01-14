import {Schema, model} from 'mongoose';

const TablaRetiros = Schema({
    fecha: Date,
    cajero:String,
    cantidad:String
},{
    versionKey: false,
}
)

module.exports = model('Retiros', TablaRetiros)