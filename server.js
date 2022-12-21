const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const router = require('./network/routes');
const db = require('./db');

db.connect(process.env.MONGO_URI);

let app = express();

app.use(bodyParser.json());
app.use('/app', express.static('public'));

router(app);

app.listen(process.env.PORT,() =>{
    console.log('Aplicación escuchando por el puerto ' + process.env.PORT);
});
