// Importamos el módulo readline
// Sirve para leer datos que el usuario escribe en la consola
const readline = require('readline');

// Importamos nuestra librería de poemas (index.js)
const biblioteca = require('./index');


// Creamos la interfaz de comunicación con la consola
const rl = readline.createInterface({
  input: process.stdin,   // Entrada de datos (lo que escribe el usuario)
  output: process.stdout  // Salida de datos (lo que se muestra en consola)
});


// ===============================
// Función para mostrar el menú
// ===============================
function mostrarMenu() {

  console.log("\n===== 📚 LIBRERÍA DE POEMAS =====");
  console.log("1. Ver lista de poemas");
  console.log("2. Leer un poema");
  console.log("3. Agregar un poema");
  console.log("4. Eliminar un poema");
  console.log("5. Salir");

  // rl.question muestra un mensaje y espera la respuesta del usuario
  rl.question("Seleccione una opción: ", manejarOpcion);
}


// ===============================
// Función que maneja la opción elegida
// ===============================
function manejarOpcion(opcion) {

  // Usamos switch para evaluar la opción seleccionada
  switch (opcion) {

    case "1":
      // Opción 1: Listar poemas
      const lista = biblioteca.listarPoemas();

      console.log("\n📄 Poemas disponibles:");
      console.log(lista);

      // Volvemos a mostrar el menú después de ejecutar la acción
      mostrarMenu();
      break;


    case "2":
      // Opción 2: Leer un poema

      rl.question("Ingrese el nombre del archivo: ", (nombre) => {

        try {
          // Intentamos leer el archivo usando la librería
          const contenido = biblioteca.leerPoema(nombre);

          console.log("\n📖 Contenido del poema:\n");
          console.log(contenido);

        } catch (error) {
          // Si ocurre un error (por ejemplo archivo no existe)
          console.log("❌ Error: archivo no encontrado");
        }

        // Volvemos al menú
        mostrarMenu();
      });

      break;


    case "3":
      // Opción 3: Agregar un poema

      rl.question("Nombre del archivo: ", (nombre) => {

        rl.question("Contenido del poema: ", (contenido) => {

          // Llamamos la función para guardar el archivo
          biblioteca.agregarPoema(nombre, contenido);

          console.log("✅ Poema agregado correctamente");

          // Regresamos al menú
          mostrarMenu();
        });
      });

      break;


    case "4":
      // Opción 4: Eliminar un poema

      rl.question("Nombre del archivo a eliminar: ", (nombre) => {

        try {
          // Intentamos eliminar el archivo
          biblioteca.eliminarPoema(nombre);

          console.log("🗑️ Poema eliminado");

        } catch (error) {
          console.log("❌ Error: archivo no encontrado");
        }

        // Volvemos al menú
        mostrarMenu();
      });

      break;


    case "5":
      // Opción 5: Salir del programa

      console.log("👋 Saliendo...");

      // Cerramos la interfaz readline
      rl.close();

      break;


    default:
      // Si el usuario escribe una opción inválida
      console.log("❌ Opción inválida");

      // Mostramos nuevamente el menú
      mostrarMenu();
  }
}


// ===============================
// Iniciamos el programa
// ===============================

// Llamamos la función para mostrar el menú por primera vez
mostrarMenu();
