const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) =>{
    controller.getMessages()
        .then( data => response.success(req, res, data, 200))
        .catch( e => response.error(req, res, 'Unexpected error', 500, '[Error en el controlador de mensajes] '+ e))
});

router.post('/', (req, res) =>{
    controller.addMessage(req.body.user, req.body.message)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de mensajes] '+ e ))
});

router.patch('/:id', (req, res) =>{
    controller.updateMessage(req.params.id, req.body.message)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de mensajes] '+ e ))
});

module.exports = router;