import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoTranscurrido',
})
export class TiempoTranscurridoPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    // Verificamos si la fecha es válida
    if (!(value instanceof Date && !isNaN(value.getTime()))) {
      return "Fecha inválida";
    }

    // Obtenemos la diferencia en milisegundos
    const ahora = Date.now();
    const fecha = value.getTime();
    const diferenciaMilisegundos = Math.abs(ahora - fecha);

    // Convertimos la diferencia a segundos, minutos, horas, días y meses
    const diferenciaSegundos = Math.floor(diferenciaMilisegundos / 1000);
    const diferenciaMinutos = Math.floor(diferenciaSegundos / 60);
    const diferenciaHoras = Math.floor(diferenciaMinutos / 60);
    const diferenciaDias = Math.floor(diferenciaHoras / 24);
    const diferenciaMeses = Math.floor(diferenciaDias / 30); // Aproximación para meses

    // Definimos los mensajes según la diferencia
    if (diferenciaMinutos < 1) {
      return "ahora";
    } else if (diferenciaMinutos < 60) {
      return `${diferenciaMinutos}m`;
    } else if (diferenciaHoras < 24) {
      return `${diferenciaHoras}h`;
    } else if (diferenciaDias < 30) {
      return `${diferenciaDias}d`;
    } else {
      return `${diferenciaMeses}ms`;
    }
  }
}
