const routerRecord = require('./records/index');

const routerApi = (app) => {
    app.use('/records', routerRecord);
}

module.exports = routerApi;