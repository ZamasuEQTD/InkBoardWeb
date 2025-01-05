import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeThumbnail',
})
export class YoutubeThumbnailPipe implements PipeTransform {

    transform(url: string, quality: 'default' | 'medium' | 'high' = 'default'): string {
    // Extraer el ID del video de la URL
    const videoId = this.extractVideoId(url);

    if (!videoId) {
      return ''; // Si no se encuentra un ID válido, retornar una cadena vacía
    }

    // Generar la URL de la miniatura según la calidad solicitada
    switch (quality) {
      case 'medium':
        return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      case 'high':
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      default:
        return `https://img.youtube.com/vi/${videoId}/default.jpg`;
    }
  }

  private extractVideoId(url: string): string | null {
    // Expresión regular para extraer el ID del video de una URL de YouTube
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

}
