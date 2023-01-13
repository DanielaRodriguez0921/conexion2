const mogoose = require('mongoose');

const dbConnection = async () => {

    try {
        mogoose.set("strictQuery", false);
        await mogoose.connect(process.env.BD_CNN, () => {
            console.log("Connected to MongoDB");
        });
        console.log('Base de datos corriendo');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la base de datos')
    }
}

module.exports = { dbConnection };