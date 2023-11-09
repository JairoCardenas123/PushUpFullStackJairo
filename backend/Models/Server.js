
const express = require("express");
const cors = require("cors");
const routeClientes = require('../routes/clientes.routes.js')

class Server{


    constructor(){
        this.app = express();
        this.clientePath = "/api/clientes"
        
        this.port = process.env.PORT;
        // ! Middleware
        this.middlewares();
 

        //! Routes
        this.routes();
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.clientePath,routeClientes)

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}


module.exports = Server;

