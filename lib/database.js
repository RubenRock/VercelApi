const mongoose = require('mongoose')

mongoose.Promise = global.Promise

export const coneccion = async () =>{    
    console.log('empezo')
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((db) => console.log("Mongodb is connected to", db.connection.host))
    .catch((err) => console.error(err));

    console.log('termino')
}