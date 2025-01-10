import { Pipe, type PipeTransform } from '@angular/core';
import { PickedMedia } from '../interfaces/picked-media.interface';
import { Media } from '../interfaces/media.interface';
import { ContenidoCensurable } from '../interfaces/contenido-censurable.interface';

@Pipe({
  name: 'media',
})
export class MediaPipe implements PipeTransform {

  transform(value:  PickedMedia): Media {
    return {
      url:value.source,
      es_spoiler:false,
      provider : value.type!
    };
  }

}
