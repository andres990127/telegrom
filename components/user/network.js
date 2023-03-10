const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) =>{
    const filterUsers = req.query.name || null;
    controller.getUsers(filterUsers)
        .then( data => response.success(req, res, data, 200))
        .catch( e => response.error(req, res, 'Unexpected error', 500, '[Error en el controlador de usuarios] '+ e))
});

router.post('/', (req, res) =>{
    controller.addUser(req.body.name)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de usuarios] '+ e ))
});

router.patch('/:id', (req, res) =>{
    controller.updateUser(req.params.id, req.body.name)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de usuarios] '+ e ))
});

router.delete('/:id', (req, res) =>{
    controller.deleteUser(req.params.id)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de usuarios] '+ e ))
});

module.exports = router;