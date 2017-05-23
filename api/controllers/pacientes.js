'use strict'

var paciente = require('../models/pacientes');

function getPacientes(req, res){

	paciente.find({}, (err, paccientes_list) => {
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!paccientes_list){
				res.status(404).send({message: 'No existen pacientes.'});
			}else{
				res.status(200).send({ paccientes_list });
			}
		}
	});
}

function savePaciente(req, res){
	var pac = new paciente();

	var params = req.body;
	pac.nombre = params.nombre;
	pac.apellido = params.apellido;
  pac.dni = params.dni;
  pac.direccion = params.direccion;

	pac.save((err, pacienteSave) => {
		if(err){
			res.status(500).send({message: 'Error en al guardar el paciente'});
		}else{
			if(!pacienteSave){
				res.status(404).send({message: 'No se ha guardado el paciente.'});
			}else{
				res.status(200).send({paciente: pacienteSave});
			}
		}
	});
}

module.exports = {
	getPacientes,
  savePaciente
};
