//npm install express para el modulo
import express from "express"; // importo express
import { obtenerHoraActual } from "./time.js"; //importo la hora 
const app = express(); // creo la app de express

app.get("/", (req, res) => {
  res.send("Bienvenido al servidor"); // mando un mensaje cuando entran al server
});

app.get("/hora", (req, res) => {
  const hora = obtenerHoraActual(); // pido a la funcion que me de la hora
  res.send(hora); //mando la hora
});
app.get("/fecha-completa", (req, res) => {
  const ahora = new Date(); //Creo una variable con la fecha

  //creo un array con los dias de la semana
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ];

  //creo un array con los dias de los meses
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];

  const nombreDia = dias[ahora.getDay()]; //creo una variable con el dia de la semana
  const numeroDia = ahora.getDate(); //creo una variable con el numero del dia
  const nombreMes = meses[ahora.getMonth()]; //creo una variable con el mes
  const anio = ahora.getFullYear(); //creo una variable con el año
  const hora = obtenerHoraActual(); //creo una variable con la hora

  //armo la fecha con todo
  const fechaCompleta = nombreDia + " " + numeroDia + " de " + nombreMes + " de " + anio + ", " + hora;

  res.send(fechaCompleta); //mando todo
});


app.use((req, res) => {
  res.status(404).send("Error 404: la ruta no existe"); // si la ruta no existe mando el error 404
});

export default app; // exporto la app