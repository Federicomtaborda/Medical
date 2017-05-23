'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = Schema({
		nombre: String,
    apellido: String,
    dni: String,
		direccion: String
	});

module.exports = mongoose.model('Paciente', PacienteSchema);
