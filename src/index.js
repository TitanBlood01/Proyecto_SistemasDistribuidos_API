const {app} = require('./app')
const {dbConnection} = require('./connectionDB');

async function init() {
    await dbConnection();
    await app.listen(3000);
    console.log('Server on Localhost:3000')
}

init()