const db = require('mongoose'); 
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://andres0127:andres2704@cluster0.cbiaivj.mongodb.net/test');
console.log('Base de datos conectada con éxito')

async function addMessage(message){
    const myMessage = new Model(message);
    return await myMessage.save();
}

async function getMessages(){
    return await Model.find();
}

async function updateMessage(id, message){
    const data = await Model.findOne({
        _id: id
    });

    data.message = message;
    return await data.save();
}


module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage
    // get
    // update
    // delete
}