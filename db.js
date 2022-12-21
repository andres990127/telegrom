const db = require('mongoose'); 

db.Promise = global.Promise;

async function connect(URI){
    await db.connect(URI);
    console.log('Base de datos conectada con éxito');
};

module.exports = {
    connect,
};



