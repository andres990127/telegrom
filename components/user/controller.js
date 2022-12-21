const store = require('./store');

function addUser(name){
    return new Promise((res, rej) => {
        if(!name){
            console.error('[MessageController] No se ingresó el nombre del usuario');
            return rej('Los datos son incorrectos');
        };

        const User = {
            name: name
        };

        res(store.add(User));
    });
};

function getUsers(filterUser){
    return new Promise((res,rej) =>{
        if (filterUser){
            res(store.get(filterUser));
        } else{
            res(store.list());
        }
    });
};

function updateUser(id, user){
    return new Promise((res,rej) =>{
        if(!id || !user){
            console.error('[MessageController] No hay Id o nombre de usuario');
            return rej('Los datos son incorrectos');
        };
        res(store.update(id, user));
    });
};

function deleteUser(id){
    return new Promise((res,rej) =>{
        if(!id){
            console.error('[MessageController] No hay Id');
            return rej('Los datos son incorrectos');
        };
        res(store.delete(id));
    });
};

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
}