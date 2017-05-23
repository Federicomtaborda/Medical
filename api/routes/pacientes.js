'use strict'

var express = require('express');
var pacientesController = require('../controllers/pacientes');
var api = express.Router();

 api.get('/pacientes', pacientesController.getPacientes);
 api.post('/paciente', pacientesController.savePaciente);


module.exports = api;
