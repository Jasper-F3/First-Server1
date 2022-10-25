const http = require('http')

const server = http.createServer( (request, response) => {

    const dados = {
        id: 123,
        temperatura: 23.5,
        umidade: 66,
        pressao: 3500,
        velocidadeVento: 8,
    }

    response.write(JSON.stringify(dados))
    response.end();
});

server.listen(3000);

console.log('Server running!')