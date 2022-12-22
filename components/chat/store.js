const Model = require('./model');

async function addChat(users){
    const myChat = new Model({users});
    return await myChat.save();
}

async function getChat(id){
    return await Model.find({
        _id: id
    });
}

async function getChats(){
    return await Model.find()
        .populate('users');
}

module.exports = {
    add: addChat,
    list: getChats,
    get: getChat,
}