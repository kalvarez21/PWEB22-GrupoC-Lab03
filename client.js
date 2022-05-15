function nuevoArchivo(){
  let html = '<input type="text" id="nuevoTitulo" placeholder="Ingrese un titulo para el texto">' +
             '<textarea id="editarTexto" rows="8" cols="80"></textarea><br>'+
             '<input type="button" id="crearArchivo" value="Crear Archivo" onclick="crearArchivo()">'
  document.querySelector(".main").innerHTML= html;
}
function crearArchivo(){
  const nombreArchivo = document.querySelector("#nuevoTitulo")
  const contenidoArchivo = document.querySelector("#editarTexto")
  console.log(nombreArchivo)
  console.log(contenidoArchivo)
}
