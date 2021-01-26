const {Schema, model} = require('mongoose')

const TablaListaSimilar= new Schema({
    clave: String,
    descripcion:String,
},{
    versionKey: false,
}
)

module.exports = model('Papel_Listasimilar', TablaListaSimilar)