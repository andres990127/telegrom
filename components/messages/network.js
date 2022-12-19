const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', (req, res) =>{
    response.success(req, res, 'Lista de mensajes', 200);
});

router.post('/', (req, res) =>{
    response.success(req, res, 'Creado correctamente', 201);
});

module.exports = router;