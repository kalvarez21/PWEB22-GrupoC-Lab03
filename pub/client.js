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
  mostrarLista();
}
function mostrarLista(){
  const url = 'http://localhost:3000/mostrarLista';
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
  });
}
document.addEventListener("DOMContentLoaded", function(){
    mostrarLista();
})
