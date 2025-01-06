import { Component, Input, OnInit } from '@angular/core';
import { YoutubeUtil } from '../../util/youtube-util';
import { SafePipe } from "../../pipes/safe.pipe";

@Component({
  selector: 'app-youtube-player',
  imports: [SafePipe],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.css',
})
export class YoutubePlayerComponent implements OnInit{

  @Input() url!:string;

  embedUrl!:string;

  ngOnInit(): void {
    this.embedUrl = "https://www.youtube.com/embed/"+  YoutubeUtil.getId(this.url) +"?autoplay=1";
  }
}
