import { Component, inject } from '@angular/core';
import { YoutubeIdPipe } from "../../../shared/pipes/youtubeId.pipe";
import { SafePipe } from "../../../shared/pipes/safe.pipe";
import { YoutubePlayerComponent } from "../../../shared/components/youtube-player/youtube-player.component";
import { HiloService } from '../../services/hilo.service';
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";

@Component({
  selector: 'app-hilo-body',
  // imports: [MediaBoxComponent],
  templateUrl: './hilo-body.component.html',
  styleUrl: './hilo-body.component.css',
  imports: [MediaBoxComponent],
})
export class HiloBodyComponent {
  public service = inject(HiloService);



}
