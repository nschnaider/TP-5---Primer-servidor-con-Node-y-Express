import app from "./app.js"; // importo aapp.js

const PUERTO = 3000; // defino el puerto

//levanto el servidor
app.listen(PUERTO, () => {
  console.log("Servidor corriendo en http://localhost:3000"); //mando mensaje cuando empieza
});