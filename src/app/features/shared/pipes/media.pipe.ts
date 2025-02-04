import { Pipe, type PipeTransform } from '@angular/core';
import { PickedMedia } from '../interfaces/picked-media.interface';
import { Media } from '../../core/models/media.interface';

@Pipe({
  name: 'media',
})
export class MediaPipe implements PipeTransform {

  transform(value:  PickedMedia): Media {
    return {
      url:value.source,
      spoiler:false,
      provider : value.type!
    };
  }

}
