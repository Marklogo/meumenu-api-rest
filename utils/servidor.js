const express = require('express');
var cors = require('cors')

class Servidor {

    constructor(){       
        this.server=express();
        this.port = process.env.PORT;
        this.usuariosEndPoint = '/api/usuarios'

        this.middlewares(); 
        this.routes();
    }
    
    
    middlewares() {
        this.server.use(cors()); //CORS
        this.server.use(express.json()); //Lectura y Parseo Body
        this.server.use(express.static('public'));   //Directorio Publico
    }

    routes() {
        this.server.use(this.usuariosEndPoint, require('../usuarios/usuarios.routes'));
    }

    escuchar() {
        this.server.listen(this.port,()=> {console.log(`El servidor esta corriendo en el puerto ${this.port}`);});
    }
}

module.exports=Servidor;