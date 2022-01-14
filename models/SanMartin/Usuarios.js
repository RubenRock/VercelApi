import {Schema, model} from 'mongoose'

const TablaUsuarios = Schema({
    login: String,
    passwd:String,
},{
    versionKey: false,
}
)

module.exports = model('Usuario', TablaUsuarios)