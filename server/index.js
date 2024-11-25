const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

// Inicia el servidor solo si no está en entorno de prueba
const PORT = 4000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log('El servidor está corriendo perfectamente');
    });
}

module.exports = app; // Exportar para pruebas
