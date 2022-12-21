const Model = require('./model');

async function addMessage(message){
    const myMessage = new Model(message);
    return await myMessage.save();
}

async function getMessage(user){
    return await Model.find({
        user
    });
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

async function deleteMessage(id){
    return await Model.deleteOne({
        _id: id
    });
}


module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    get: getMessage,
    delete: deleteMessage
}