<table>
  <tbody>
   <tr>
   <td><img src="./imagenes/epis.png" alt="EPIS"></td>
   <th>
   <p>UNIVERSIDAD NACIONAL DE SAN AGUSTIN</p>
   <p>FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</p>
   <p>ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</p>
   </th>
   <td><img src="./imagenes/abet.png" alt="ABET"></td>
   </tr>
  </tbody>
</table>
<div align="center" dir="auto"><table>    
   <tbody>
   <tr><td colspan="3">Formato: Guía de Práctica de Laboratorio / Talleres / Centros de Simulación</td></tr>
   <tr><td>Aprobación:  2022/03/01</td><td>Código: GUIA-PRLD-001</td><td>Página: 1</td></tr>
   </tbody>
</table></div>
<div align="center" dir="auto">
   <span>INFORME DE LABORATORIO</span><br>
   <span>(formato estudiante)</span>
</div>
<div align="center" dir="auto"><table>
   <tbody><tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
   </tbody><tbody>
   <tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
   <tr><td>TÍTULO DE LA PRÁCTICA: </td><td colspan="5">Ajax y NodeJS</td></tr>
   <tr>
   <td>NÚMERO DE PRÁCTICA:</td><td>03</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
   </tr>
   <tr>
   <td>FECHA Presentacion:</td><td>15-May-2022</td><td>Hora de Presentacion:</td><td colspan="3">23:55</td>
   </tr>
   <tr><td colspan="3">Integrantes:
   <ul dir="auto">
   <li>Kevin Jheeremy Alvarez Astete</li>
   </ul>
   </td>
   <td> NOTA: </td>
   <td colspan="2"> </td>
   </tr><tr><td colspan="6">DOCENTES:
   <ul dir="auto">
   <li>Richart Smith Escobedo Quispe (rescobedoq@unsa.edu.pe)</li>
   </ul>
   </td>
</tr></tbody></table></div>
   <h1>SOLUCION Y RESULTADOS</h1>
   <h2>I. SOLUCION DE EJERCICIOS/PROBLEMAS</h2>
   <ul>
    <li></li>
   </ul>
   <h2>II. SOLUCION DE CUESTIONARIO</h2>
   <ul>
      <li> En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ….."?</li>
          - No se uso porque el cliente puede traducir la respuesta enviada usando una plantilla html predeterminada (es por que el mensaje se muestra dentro 
            de un tag llamado pre), sin embargo, cuando se usa la linea content type el cliente entendera que queremos ver la respuesta en cierto formato indicado
            En el caso de usar html pondra el mensaje sin usar tags dentro del body.
      <li> En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt</li>
          - Deberia estar en la carpeta priv, tal como se le indica en la direccion que recibe path.resolve
      <li> ¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?</li>
          - Reemplaza todos los salto de linea "\n" por la etiqueta "br" de forma que el texto en html se muestre tal como esta en el archivo txt
      <li> Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?</li>
          - Se puede utilizar response.send() para enviar cadenas y arrays sin necesidad de usar JSON, de forma que la informacion se muestra directamente
   </ul>
   <h2>III. CONCLUSIONES</h2>
   <ul>
      <li>NodeJS resulta una tecnologia muy util para la aplicacion del lenguaje Javascript en el area del backend. Ademas con el uso de paquetes como
          express facilita aun mas su aplicacion en proyectos.</li>
      <li>La tecnologia AJAX agiliza mucho la interaccion del cliente con el servidor, evitando asi el cargado de la pagina completa</li>
   </ul>
   <h1>RETROALIMENTACION GENERAL</h1>
   <h1>REFERENCIA Y BIBLIOGRAFIA</h1>
   <b><i>[1] "Adjuntar codigo js a un html en node.js". Stack Overflow en español. https://es.stackoverflow.com/questions/270750/adjuntar-codigo-js-a-un-html-en-node-js (accedido el 17 de mayo de 2022).</i></b><br>
   <b><i>[2] "Proper way to return JSON using node or Express". Stack Overflow. https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express (accedido el 17 de mayo de 2022).</i></b><br>
   <b><i>[3] "Node.js Introduction". W3Schools Online Web Tutorials. https://www.w3schools.com/nodejs/nodejs_intro.asp (accedido el 17 de mayo de 2022).</i></b><br>
   <b><i>[4] "Express - Infraestructura de aplicaciones web Node.js". Express - Node.js web application framework. https://expressjs.com/es/ (accedido el 17 de mayo de 2022).</i></b>
