import { Component, Input, OnInit } from '@angular/core';
import { YoutubePlayerComponent } from "../youtube-player/youtube-player.component";
import { CommonModule } from '@angular/common';
import { Media } from '../../../core/models/media.interface';

@Component({
  selector: 'app-media-box',
  imports: [YoutubePlayerComponent,CommonModule],
  templateUrl: './media-box.component.html',
  styleUrl: './media-box.component.css',
})
export class MediaBoxComponent implements OnInit {
  
  static dimensionables :string [] = ['youtube', 'image', 'gif' ,'video']

  @Input() media!:Media;

  isDimensionable !:boolean;

  ngOnInit(): void {
    this.isDimensionable = MediaBoxComponent.dimensionables.includes(this.media.provider);
  }

  @Input() dimensionableSize?: {maxWidth? : string,maxHeight? : string} 
}
