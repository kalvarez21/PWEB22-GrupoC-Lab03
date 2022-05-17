//Muestra formulario para crear nuevo archivo
function nuevoArchivo(){
  let html = '<input type="text" id="nuevoTitulo" placeholder="Ingrese un titulo para el archivo"><br>' +
             '<textarea id="editarTexto" rows="8" cols="80"></textarea><br>'+
             '<input type="button" id="crearArchivo" value="Crear Archivo" onclick="crearArchivo()">'+
             '<input type="button" id="cancelar" value="Cancelar" onclick="cancelarCrear()">'
  document.querySelector(".main").innerHTML= html;
}

//Envia los datos para Crea un archivo nuevo
function crearArchivo(){
  const nombreArchivo = document.querySelector("#nuevoTitulo").value //extrae el titulo del archivo
  const contenidoArchivo = document.querySelector("#editarTexto").value//extrae el contenido del archivo
  const url = 'http://localhost:3000/guardarArchivo';
  const data ={ //almacena los valores de titulo y contenido
      title: nombreArchivo,
      content: contenidoArchivo,
  }
  const request = { //objeto enviado al servidor
      method : 'POST', //tipo de metodo : POST
      headers : {'Content-Type':'application/json'},
      body : JSON.stringify(data),//serializa el objeto data
  }
  fetch(url , request);
  let html = '<textarea id="verTexto" rows="8" cols="80" disabled></textarea><br>' +
             '<div class="mostrarHtml"></div>';
  document.querySelector('.main').innerHTML = html;//muestra un area de texto para observar el contenido del archivo en markdown
  mostrarLista();//actualiza la lista de archivos
}

function cancelarCrear () { //permite cancelar la creacion de un archivo mostrando el formulario que muestra el contenido de un archivo
    document.querySelector(".main").innerHTML= htmlVerTexto;
}

//Pide al servidor el nombre de los archivos creados
function mostrarLista(){
  const url = 'http://localhost:3000/mostrarLista';
  fetch(url)
  .then((response) => response.json()) //El response lo vuelve JSON
  .then((data) => {//data contiene el nombre de los archivos como array
      document.querySelector('#listadoArchivos').innerHTML = formatoLista(data);//el array data lo envia a formatoLista
  });
}

//Da formato de lista html a los elementos de data
function formatoLista(data){
  let html = "<ul><br>";
  for(let i = 0 ; i < data.length ; i++){
    let nombreArchivo = data[i].substring(0, data[i].length - 3);//extrae los 3 ultimos caracteres (Extension del archivo ".md")
    html += `<li onclick="mostrarArchivo('${nombreArchivo}')">${nombreArchivo}</li>`;//da formato lista y añade el atributo onclick
  }
  html += "</ul>"
  return html;
}

//Pide al servidor el contenido del archivo seleccionado
function mostrarArchivo(file){
  let titulo = file;
  const url = 'http://localhost:3000/leerArchivo';
  const data = {//almacena el titulo del archivo
      title: titulo
  }
  const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),//serializa el objeto data
  }
  fetch(url,request).then(response => response.json())
  .then(data => {
      if(document.querySelector('.mostrarHtml') == null)//En caso de que no exista ese tag con la clase .mostrarHtml
        document.querySelector(".main").innerHTML= htmlVerTexto;//reemplaza el formulario por aquel que permite mostrar contenido de archivos
      document.querySelector('.mostrarHtml').innerHTML = data.htmlText;//extrae el contenido en html y lo muestra en el div mostrarHtml
      document.querySelector('#verTexto').value = data.markDownText;//extrae el contenido en markdown y lo muestra en el area de texto
    })
}
let htmlVerTexto //guardar el formato html para ver textos
//Cuando se carga el documento recien muestra el listado de archivos
document.addEventListener("DOMContentLoaded", function(){
    mostrarLista();
    htmlVerTexto = document.querySelector(".main").innerHTML;
})
