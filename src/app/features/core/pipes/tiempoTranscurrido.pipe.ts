import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoTranscurrido',
})
export class TiempoTranscurridoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log('Input value:', value);
    const date = new Date(value);
    console.log('Parsed date:', date);

    if (isNaN(date.getTime())) {
      return 'Fecha inválida';
    }

    const now = new Date();
    const diff = now.getTime() - date.getTime();

    // Calculate the time difference in various units
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} días`;
    } else if (hours > 0) {
      return `${hours} horas`;
    } else if (minutes > 0) {
      return `${minutes} minutos`;
    } else {
      return `${seconds} segundos`;
    }
  }
}
