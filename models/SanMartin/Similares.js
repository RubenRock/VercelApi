const {Schema, model} = require('mongoose')

const TablaSimilares = new Schema({
    clave: String,
    producto:String,
},{
    versionKey: false,
}
)

module.exports = model('Similares', TablaSimilares)