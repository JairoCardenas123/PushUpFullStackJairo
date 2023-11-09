const mongoose = require('mongoose');

const connectDB = async() =>{
try {
    const connectionDB = await mongoose.connect(process.env.DDBB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    const db = `Conectado al wifi ${connectionDB.connection.host} - en el puerto ${connectionDB.connection.port}`
    console.log(db);
} catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
}}

module.exports = connectDB;