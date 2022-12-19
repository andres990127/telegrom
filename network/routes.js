const message = require('../components/messages/network');

const routes = (app) => {
    app.use('/message', message)
}

module.exports = routes;