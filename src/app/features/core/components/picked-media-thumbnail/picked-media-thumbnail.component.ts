import { Component, Input } from '@angular/core';
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';
import { YoutubeThumbnailPipe } from "../../../shared/pipes/youtubeThumbnail.pipe";

@Component({
  selector: 'app-picked-media-thumbnail',
  imports: [
    YoutubeThumbnailPipe
],
  templateUrl: './picked-media-thumbnail.component.html',
  styleUrl: './picked-media-thumbnail.component.css',
})
export class PickedMediaThumbnailComponent {

  @Input() media!: PickedMedia;
}
