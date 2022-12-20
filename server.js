const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

let app = express();

app.use(bodyParser.json());
app.use('/app', express.static('public'));

router(app);

app.listen(8080,() =>{
    console.log('Aplicación escuchando por el puerto 8080');
});
