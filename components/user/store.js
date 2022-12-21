const Model = require('./model');

async function addUser(user){
    const myUser = new Model(user);
    return await myUser.save();
}

async function getUser(name){
    return await Model.find({
        name
    });
}

async function getUsers(){
    return await Model.find();
}

async function updateUser(id, name){
    const data = await Model.findOne({
        _id: id
    });

    data.name = name;
    return await data.save();
}

async function deleteUser(id){
    return await Model.deleteOne({
        _id: id
    });
}


module.exports = {
    add: addUser,
    list: getUsers,
    get: getUser,
    update: updateUser,
    delete: deleteUser
}