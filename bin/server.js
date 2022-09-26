const http = require ('http');
const app = require('../app');

const server = http.createServer(app);
server.listen(3000);
server.on('listening',()=>{
    console.log('el servidor escuchando en 3000')
})