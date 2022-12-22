const store = require('./store');

function addChat(users){
    return new Promise((res, rej) => {
        if(!users || !Array.isArray(users)){
            console.error('[MessageController] No hay usuarios para crear el chat');
            return rej('Los datos son incorrectos');
        };

        res(store.add(users));
    });
};

function getChats(filterChat){
    return new Promise((res,rej) =>{
        if (filterChat){
            res(store.get(filterChat));
        } else{
            res(store.list());
        }
    });
};

module.exports = {
    addChat,
    getChats,
}