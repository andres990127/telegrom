const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) =>{
    controller.getChats(req.params.userId)
        .then( data => response.success(req, res, data, 200))
        .catch( e => response.error(req, res, 'Unexpected error', 500, '[Error en el controlador de Chats] '+ e))
});

router.post('/', (req, res) =>{
    controller.addChat(req.body.users)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de Chats] '+ e ))
});

module.exports = router;
