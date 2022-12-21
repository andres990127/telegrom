const message = require('../components/messages/network');
const user = require('../components/user/network');

const routes = (app) => {
    app.use('/message', message);
    app.use('/user', user);
}

module.exports = routes;