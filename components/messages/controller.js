const store = require('./store');

function addMessage(chat, user, message){
    return new Promise((res, rej) => {
        if(!chat|| !user || !message){
            console.error('[MessageController] No hay usuario o mensaje');
            return rej('Los datos son incorrectos');
        };

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        };

        res(store.add(fullMessage));
    });
};

function getMessages(filterUser){
    return new Promise((res,rej) =>{
        if (filterUser){
            res(store.get(filterUser));
        } else{
            res(store.list());
        }
    });
};

function updateMessage(id, message){
    return new Promise((res,rej) =>{
        if(!id || !message){
            console.error('[MessageController] No hay Id o mensaje');
            return rej('Los datos son incorrectos');
        };
        res(store.update(id, message));
    });
};

function deleteMessage(id){
    return new Promise((res,rej) =>{
        if(!id){
            console.error('[MessageController] No hay Id');
            return rej('Los datos son incorrectos');
        };
        res(store.delete(id));
    });
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}