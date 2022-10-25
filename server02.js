import cors from "cors";
const { json } = require('express');
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use((request, response, next) => {

    //const info = request.headers.info;
    const num = request.headers.num;

    const nome = request.query.nome;

    const cidade = request.body.cidade;
    const estado = request.body.estado;

    const dados = {
        nome,
        local: `${cidade} - ${estado}`

       
    }
    response.send(JSON.stringify(dados))


});

app.listen(3000);

console.log('Server running!')