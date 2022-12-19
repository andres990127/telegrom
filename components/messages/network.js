const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) =>{
    response.success(req, res, 'Lista de mensajes', 200);
});

router.post('/', async (req, res) =>{
    await controller.addMessage(req.body.user, req.body.message)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, 'Error en el controlador'))
});

module.exports = router;