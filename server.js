var express = require('express')
var app = express();
// requerir HBS e // importar helpers
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

// midelware


app.use(express.static(__dirname + '/public'));
//Express HBS engine npm install hbs --save
// nodemon server -e js, hbs, html,css paara que escuche todos los cambios
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')
    // urls, request, response
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Homero'
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});