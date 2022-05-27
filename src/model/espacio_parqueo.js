const {Schema, model } = require('mongoose');
const espParqSchema = new Schema({
    numero: String,
    nombreOcupante: String,
    cargo: String,
    piso: String,
    horaInicio: String,
    horaFin: String,
    estado: String
});

module.exports = model('espParqueos', espParqSchema);