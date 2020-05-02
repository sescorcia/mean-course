//This sentence follows the syntax that NodeJS follows for importing
const http = require('http');

const server = http.createServer((request, respond) => {
  respond.end('This is my first response');
});

//process.env.Port is an environment variable that is injected in runtime (set up in prod)
server.listen(process.env.Port || 3000);
