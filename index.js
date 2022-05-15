const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();//servira para traducir markdown a html
const app = express()

/*
  Paquetes necesarios:
  npm install body-parser
  npm install markdown-it --save
  npm install express
*/

app.use(express.static('pub'))
app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
})

app.use(bp.json())
app.use(bp.urlencoded({
    extended: true
}))

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.post('/guardarArchivo', (request, response) => {
    let tituloArchivo = request.body.title + '.md';
    let contenidoArchivo = request.body.content;
    console.log(tituloArchivo);
    console.log(contenidoArchivo);
    fs.writeFile(path.resolve(__dirname + 'priv/' + tituloArchivo), contenidoArchivo, function (err) {
        if (err) {
            console.log('Ocurrio un error');
            console.log(err);
            return
        }
        console.log('Guardado exitosamente');
    });
})
