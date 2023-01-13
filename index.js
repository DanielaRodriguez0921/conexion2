const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./db/config');




// crear servidor de la aplicacion 
const app = express();

// Conexión base de datos
dbConnection();

//CORS
app.use(cors());

//Lectura y parseo del Body

app.use(express.json());


// Rutas de nuestra aplicacion
app.use('/api/usuarios', require('./routes/users'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto' + process.env.PORT);
})