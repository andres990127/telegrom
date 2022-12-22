const express = require('express');
const router = express.Router();
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');

const uploadFile = multer({
    dest: 'public/files/',
})

router.get('/', (req, res) =>{
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then( data => response.success(req, res, data, 200))
        .catch( e => response.error(req, res, 'Unexpected error', 500, '[Error en el controlador de mensajes] '+ e))
});

router.post('/', uploadFile.single('file'), (req, res) =>{
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de mensajes] '+ e ))
});

router.patch('/:id', (req, res) =>{
    controller.updateMessage(req.params.id, req.body.message)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de mensajes] '+ e ))
});

router.delete('/:id', (req, res) =>{
    controller.deleteMessage(req.params.id)
        .then( data => response.success(req, res, data, 201))
        .catch( e => response.error(req, res, 'Información inválida', 400, '[Error en el controlador de mensajes] '+ e ))
});

module.exports = router;