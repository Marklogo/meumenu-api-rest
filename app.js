require('dotenv').config();
const Servidor = require('./utils/servidor');



const servidor = new Servidor();
servidor.escuchar();


