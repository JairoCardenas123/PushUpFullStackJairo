
const express = require("express");
const cors = require("cors");
const routeClientes = require('../routes/clientes.routes.js')
const routeEmpleados = require('../routes/empleados.routes.js')
const routeProductos = require('../routes/productos.routes.js')
const routeUsuarios = require('../routes/usuarios.routes.js')

class Server{


    constructor(){
        this.app = express();
        this.clientePath = "/api/clientes"
        this.empleadoPath = "/api/empleados"
        this.productoPath = "/api/productos"
        this.usuarioPath = "/api/usuarios"
        
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
        this.app.use(this.empleadoPath,routeEmpleados)
        this.app.use(this.productoPath,routeProductos)
        this.app.use(this.usuarioPath,routeUsuarios)

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}


module.exports = Server;

