const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    telefono: {
        type: String
    }
});

module.exports = model('User', UserSchema);