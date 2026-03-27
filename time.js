//funcion para conseguir la hora actual
export function obtenerHoraActual() {
  const ahora = new Date(); // creo la fecha actual

  let horas = ahora.getHours(); // creo una variable con las horas
  let minutos = ahora.getMinutes(); // creo una variable con los minutos
  let segundos = ahora.getSeconds(); //creo una variable con los segundos

  // si las horas son menos de 10 se pone el 0 antes
  if (horas < 10) {
    horas = "0" + horas;
  }

  // si las minutos son menos de 10 se pone el 0 antes
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  //  si las segundos son menos de 10 se pone el 0 antes
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  //mando la hora
  return horas + ":" + minutos + ":" + segundos;
}