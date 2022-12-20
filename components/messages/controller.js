const store = require('./store');

function addMessage(user, message){
    return new Promise((res, rej) => {
        if(!user || !message){
            console.error('[MessageController] No hay usuario o mensaje');
            return rej('Los datos son incorrectos');
        };

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };

        res(store.add(fullMessage));
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

function getMessages(){
    return new Promise((res,rej) =>{
        res(store.list());
    });
};

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}