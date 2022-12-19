

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
    
        console.log(fullMessage);
        res(fullMessage);
    })
};

module.exports = {
    addMessage
}