/*Otra manera de crear un servidor local*/

const http = require('http');
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'aplication/json' });
        let salida = {
            nombre: 'jon',
            edad: 36,
            url: req.url
        }
        res.write('Hola Mundo');
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);

console.log('Escuchando por el puero 8080');