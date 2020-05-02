//This sentence follows the syntax that NodeJS follows for importing
const http = require('http');
const app = require('./backend/app');


const port = process.env.Port || 3000;

app.set('port', port);
const server = http.createServer(app);

//process.env.Port is an environment variable that is injected in runtime (set up in prod)
server.listen(port);
