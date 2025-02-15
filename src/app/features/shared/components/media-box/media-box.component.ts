import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YoutubePlayerComponent } from "../youtube-player/youtube-player.component";
import { CommonModule } from '@angular/common';
import { Media } from '../../../core/models/media.interface';

@Component({
  selector: 'app-media-box',
  imports: [YoutubePlayerComponent,CommonModule],
  templateUrl: './media-box.component.html',
  styleUrl: './media-box.component.css',
})
export class MediaBoxComponent implements OnInit , OnDestroy{
  static dimensionables :string [] = ['youtube', 'image', 'gif' ,'video']

  @ViewChild("video") video? : ElementRef<HTMLVideoElement>;

  @Input() media!:Media;

  isDimensionable !:boolean;
  @Input() dimensionableSize?: {maxWidth? : string,maxHeight? : string} 

  ngOnInit(): void {
    this.isDimensionable = MediaBoxComponent.dimensionables.includes(this.media.provider);
  }

  ngOnDestroy(): void {
  }

}
