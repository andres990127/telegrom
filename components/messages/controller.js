const store = require('./store');

function addMessage(user, message){
    return new Promise( (res, rej) => {
        if(!user || !message){
            console.error('[MessageController] No hay usuario o mensaje');
            return rej('Los datos son incorrectos');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
    
        store.add(fullMessage);

        res(fullMessage);
    })
};

function getMessages(){
    return new Promise ((res, rej) => {
        res(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages
}