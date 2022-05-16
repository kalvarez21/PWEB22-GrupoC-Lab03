function nuevoArchivo(){
  let html = '<input type="text" id="nuevoTitulo" placeholder="Ingrese un titulo para el texto">' +
             '<textarea id="editarTexto" rows="8" cols="80"></textarea><br>'+
             '<input type="button" id="crearArchivo" value="Crear Archivo" onclick="crearArchivo()">'
  document.querySelector(".main").innerHTML= html;
}
function crearArchivo(){
  const nombreArchivo = document.querySelector("#nuevoTitulo").value
  const contenidoArchivo = document.querySelector("#editarTexto").value
  const url = 'http://localhost:3000/guardarArchivo';
  const data ={
      title: nombreArchivo,
      content: contenidoArchivo,
  }
  const request = {
      method : 'POST',
      headers : {'Content-Type':'application/json'},
      body : JSON.stringify(data),
  }
  fetch(url , request);
  let html = '<textarea id="verTexto" rows="8" cols="80" disabled></textarea><br>' +
             '<div class="mostrarHtml"></div>';
  document.querySelector('.main').innerHTML = html;
  mostrarLista();
}
function mostrarLista(){
  const url = 'http://localhost:3000/mostrarLista';
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      document.querySelector('#listadoArchivos').innerHTML = formatoLista(data);
  });
}
function formatoLista(data){
  let html = "<ul><br>";
  console.log(data[0]);
  for(let i = 0 ; i < data.length ; i++){
    let nombreArchivo = data[i].substring(0, data[i].length - 3);
    console.log(typeof nombreArchivo);
    html += `<li onclick="mostrarArchivo('${nombreArchivo}')">${nombreArchivo}</li><br>`;
  }
  html += "</ul>"
  console.log(html);
  return html;
}
function mostrarArchivo(file){
  let titulo = file;
  const url = 'http://localhost:3000/leerArchivo';
  const data = {
      title: titulo
  }
  const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
  }
  fetch(url,request)
  .then(response => response.json()
).then(data => {
      console.log(data);
      document.querySelector('.mostrarHtml').innerHTML = data.htmlText;
      document.querySelector('#verTexto').value = data.markDownText;
    })
}
document.addEventListener("DOMContentLoaded", function(){
    mostrarLista();
})
