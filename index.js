// Importamos el módulo fs (File System)
// Nos permite trabajar con archivos y carpetas del sistema
const fs = require('fs');

// Importamos path para manejar rutas de archivos correctamente
const path = require('path');

// Definimos la ruta de la carpeta donde están los poemas
const carpeta = path.join(__dirname, 'poemas');


// ===============================
// Ver listado de poemas
// ===============================
function listarPoemas() {
  // readdirSync lee el contenido de una carpeta
  // y devuelve un arreglo con los nombres de los archivos
  return fs.readdirSync(carpeta);
}


// ===============================
// Leer un poema
// ===============================
function leerPoema(nombreArchivo) {
  // Creamos la ruta completa del archivo usando path.join
  const ruta = path.join(carpeta, nombreArchivo);

  // readFileSync lee el archivo
  // 'utf-8' indica que queremos el contenido como texto
  return fs.readFileSync(ruta, 'utf-8');
}


// ===============================
// Agregar un poema
// ===============================
function agregarPoema(nombreArchivo, contenido) {
  // Creamos la ruta donde se guardará el nuevo archivo
  const ruta = path.join(carpeta, nombreArchivo);

  // writeFileSync crea el archivo si no existe
  // o lo sobrescribe si ya existe
  fs.writeFileSync(ruta, contenido, 'utf-8');
}


// ===============================
// Eliminar un poema
// ===============================
function eliminarPoema(nombreArchivo) {
  // Creamos la ruta del archivo que queremos eliminar
  const ruta = path.join(carpeta, nombreArchivo);

  // unlinkSync elimina el archivo del sistema
  fs.unlinkSync(ruta);
}


// ===============================
// Exportamos las funciones
// ===============================
// Esto permite usar estas funciones en otros archivos
// por ejemplo: const biblioteca = require('./index');
module.exports = {
  listarPoemas,
  leerPoema,
  agregarPoema,
  eliminarPoema
};