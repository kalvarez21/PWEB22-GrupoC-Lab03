function nuevoArchivo(){
  let html = '<textarea id="editarTexto" rows="8" cols="80"></textarea><br>'+
             '<input type="button" id="crearArchivo" value="Crear Archivo" onclick="crearArchivo()">'
  document.querySelector(".main").innerHTML= html;
}
