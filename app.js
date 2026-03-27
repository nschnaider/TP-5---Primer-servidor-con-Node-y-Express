import express from "express";
import { obtenerHoraActual } from "./time.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido al servidor");
});

app.get("/hora", (req, res) => {
  const hora = obtenerHoraActual();
  res.send(hora);
});

app.get("/fecha-completa", (req, res) => {
  const ahora = new Date();

  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ];

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

  const nombreDia = dias[ahora.getDay()];
  const numeroDia = ahora.getDate();
  const nombreMes = meses[ahora.getMonth()];
  const anio = ahora.getFullYear();
  const hora = obtenerHoraActual();

  const fechaCompleta = nombreDia + " " + numeroDia + " de " + nombreMes + " de " + anio + ", " + hora;

  res.send(fechaCompleta);
});

app.use((req, res) => {
  res.status(404).send("Error 404: la ruta no existe");
});

export default app;