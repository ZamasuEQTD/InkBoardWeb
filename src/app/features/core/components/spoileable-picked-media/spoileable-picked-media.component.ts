import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { PickedMediaThumbnailComponent } from "../picked-media-thumbnail/picked-media-thumbnail.component";
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';

@Component({
  selector: 'app-spoileable-picked-media',
  imports: [PickedMediaThumbnailComponent],
  templateUrl: './spoileable-picked-media.component.html',
  styleUrl: './spoileable-picked-media.component.css',
})
export class SpoileablePickedMediaComponent {

  @Input() spoiler!: boolean;

  @Input() media!: PickedMedia;


  @Output() onSpoiler = new EventEmitter<void>();

  @Output() onDelete = new EventEmitter<void>();
}
