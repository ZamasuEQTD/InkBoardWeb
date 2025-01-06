import { Pipe, type PipeTransform } from '@angular/core';


@Pipe({
  name: 'youtubeId'
})
export class YoutubeIdPipe implements PipeTransform {

  transform(url: string): string | null {
    // Expresión regular para extraer el ID del video de una URL de YouTube
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null; // Retorna el ID del video o null si no se encuentra
  }
}
