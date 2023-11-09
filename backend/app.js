const dotenv = require('dotenv');
const express = require('express');
const app = express()
const conectarDB = require('./Config/Config.js')
const Server = require('./Models/Server.js')
const cors = require('cors')
const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

dotenv.config()
const server = new Server();

conectarDB()
server.listen()



