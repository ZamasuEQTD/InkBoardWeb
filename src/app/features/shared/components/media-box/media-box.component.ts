import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../../interfaces/media.interface';
import { YoutubePlayerComponent } from "../youtube-player/youtube-player.component";

@Component({
  selector: 'app-media-box',
  imports: [YoutubePlayerComponent],
  templateUrl: './media-box.component.html',
  styleUrl: './media-box.component.css',
})
export class MediaBoxComponent implements OnInit {
  @Input() media!:Media;

  isDimensionable !:boolean;

  ngOnInit(): void {
    this.isDimensionable = this.media.provider === 'youtube' || this.media.provider === 'image' || this.media.provider === 'video';
  }
}
