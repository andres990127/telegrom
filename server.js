const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

let app = express();

app.use(bodyParser.json());
app.use(router);
app.use('/app', express.static('public'))

router.get('/', (req, res) =>{
    response.success(req, res, 'Lista de mensajes', 200);
})

router.post('/', (req, res) =>{
    response.success(req, res, 'Creado correctamente', 201);
})

app.listen(3000,() =>{
    console.log('Aplicación escuchando por el puerto 3000');
});
