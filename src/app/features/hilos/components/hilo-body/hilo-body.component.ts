import { Component } from '@angular/core';
import { YoutubeIdPipe } from "../../../shared/pipes/youtubeId.pipe";
import { SafePipe } from "../../../shared/pipes/safe.pipe";
import { YoutubePlayerComponent } from "../../../shared/components/youtube-player/youtube-player.component";

@Component({
  selector: 'app-hilo-body',
  imports: [ YoutubePlayerComponent],
  templateUrl: './hilo-body.component.html',
  styleUrl: './hilo-body.component.css',
})
export class HiloBodyComponent { }
