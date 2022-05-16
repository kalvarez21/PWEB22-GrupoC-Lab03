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

//Responde a la peticion de guardado de un nuevo archivo al sistema
app.post('/guardarArchivo', (request, response) => {
    let tituloArchivo = request.body.title + '.md';//extrae del JSON request el titulo del archivo
    let contenidoArchivo = request.body.content;//extrae del JSON request el contenido del archivo
    console.log(tituloArchivo);
    console.log(contenidoArchivo);
    //Crea un archivo y le asigna el titulo y archivo correspondiente
    fs.writeFile(path.resolve(__dirname ,'priv/' , tituloArchivo), contenidoArchivo, function (err) {
        if (err) {
            console.log('Ocurrio un error');
            console.log(err);
            return
        }
        console.log('Guardado exitosamente');//se mostrara en la terminal que el archivo a sido guardado
    });
})

//Responde a la peticion de listados de archivos en priv
app.get('/mostrarLista', (request, response) => {
    console.log(__dirname);
    //leera el nombre de los archivos del directorio priv y los almacena como array en files
    fs.readdir(path.resolve(__dirname, 'priv'), 'utf8', (err, files) => {
        if (err) {
            console.log('Algo salio mal')
            console.log(err)
            return;
        }
        response.json(files);//convierte el array files a JSON
    })
})

//Responde a la peticion de traducir markdown a html
app.post('/leerArchivo', (request, response) =>{
    let titulo = request.body.title + ".md"; //extrae del JSON request el titulo del archivo
    //lee el archivo y almacena su contenido en file
    fs.readFile(path.resolve(__dirname, 'priv/'+ titulo), 'utf8', (err, file) =>{
        if (err){
          console.log('Archivo no encontrado');
          console.log(err);
          return;
        }
        response.setHeader("Content.-Type","application/json");
        response.end(
        JSON.stringify({
            markDownText: file, //en este atributo se guarda el contenido en markdown
            htmlText: md.render(file), //en este atributo guarda el contenido traducido a HTML
        })
        );
    });
})
