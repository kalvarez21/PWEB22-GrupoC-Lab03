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
      title: nombreArchivo + ".md",
      content: contenidoArchivo,
  }
  console.log(data);
  const request = {
      method: 'POST',
      headers : {'Content-Type':'aplication/json'},
      body : JSON.stringify(data),
  }
  console.log(request);
  fetch(url,request);
}
