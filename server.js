const express = require('express');
const router = express.Router();

let app = express();

app.use(router);

router.get('/', (req, res) =>{
    res.send('Lista de mensajes')
})

router.post('/', (req, res) =>{
    res.status(201).send('Mensaje añadido')
})

app.listen(3000,() =>{
    console.log('Aplicación escuchando por el puerto 3000')
});
