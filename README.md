# Curriculum Vitae

La finalidad de éste proyecto ha consistido en crear un CV utilizando VueJS como entorno de desarrollo así
como Bootstrap para la interfaz junto a tecnología del entorno cliente (HTML5, CSS3, …).
Donde he creado una única página Web donde visualizo mi CV. Dicho curriculum se genera
dinámicamente, ya que el contenido a mostrar está en un archivo JSON. Eso permite mucha
flexibilidad, ya que funcioná como una plantilla que maqueta el contenido del archivo JSON, lo que
lo hace generalizable para cualquier usuario.

<h2>Aspecto visual</h2>
El aspecto visual del sitio es homogéneo y esta personalizado.
Se utiliza el tema de Boostrap estándar pero he modificando las propiedades CSS por defecto como hemos visto en clase.
Todas las páginas son responsive para varios tipos de dispositivos.

<h3>Componentes principales</h3>
<ul>
  <li>Sobre mí: compuesta por nombre y apellidos, fecha nacimiento, dirección, correo electrónico y teléfono de contacto, redes sociales así como una breve presentación sobre mi.</li>
  <li>Experiencia professional: compuesta por una lista de puestos de trabajo que he desarrollado en el paso.</li>
  <li>Educación: compuesta por una lista de títulos oficiales.</li>
  <li>Destrezas o habilidades: Lista de herramientas que conozco.</li>
  <li>Proyectos desarrollados (portfolio): Lista de proyectos terminados desarrollados.</li>
  <li>Idiomas: compuesta por una lista de idiomas que conozco.</li>
  <li>Referencias: opiniones de personas que han trabajado conmigo y han sido profesores mios.</li>
  <li>Contacto: Formulario con los campos básicos para contactar conmigo.</li>
</ul>

<h2>Requisitos técnicos</h2>
Todo el contenido mostrado en la web se lee desde un fichero JSON. Esto
permite que en un futuro modifique la web con tan sólo añadir, borrar o cambiar el contenido de ese JSON.
Ese archivo JSON se carga una única vez al ejecutar la web mediante una petición AJAX. Mientras se carga el contenido se muestra un preload.

<h3>Proyectos</h3>
En la sección de proyectos:
<ul>
  <li>Inicialmente se muestra una tarjeta con el título del proyecto junto a una imagen.</li>
  <li>Al hacer click en uno de ellos se abre en un modal la información relativa a ese proyecto.</li>
  <li>La web consta de animaciones realizadas mediante VueJS.</li>
  <li>La web esta tanto en español como inglés, se puede acceder mediante un botón en la barra de navegacion.</li>
  <li>Todos los links son reales, llevando a mis respectivos perfiles.</li>
</ul>

Enlace: 
https://ainaravc4.github.io/CV/
