const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log('BD Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app si no se conecta
    }
};

module.exports = conectarDB;
