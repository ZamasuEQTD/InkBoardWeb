import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContenidoCensurable } from '../../../shared/interfaces/contenido-censurable.interface';
import { YoutubeThumbnailPipe } from "../../../shared/pipes/youtubeThumbnail.pipe";
import { Media } from '../../../shared/interfaces/media.interface';

@Component({
  selector: 'app-comentar-hilo-form',
  imports: [YoutubeThumbnailPipe],
  templateUrl: './comentar-hilo-form.component.html',
  styleUrl: './comentar-hilo-form.component.css',
})
export class ComentarHiloFormComponent {
  @ViewChild('fileInputRef') fileInput!: ElementRef;
  @ViewChild('myTextareaRef') myTextarea!: ElementRef;

  public media?: ContenidoCensurable<PickedMedia>;


  onFileSelected(event: any) {
    const  files :FileList = event.target.files;

    const  file : File= files[0];

    console.log(file)

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.media  = {
        ocultar:false,
        contenido: {
          provider :  reader.result! as string,
          type : file.type.split('/')[0]
        }
      }
    }

    reader.readAsDataURL(event.target.files[0]);
  }


  public eliminarMedia() :void {
    this.fileInput.nativeElement.value = '';

    this.media = undefined;
  }

  toggleOcultar(){
    this.media!.ocultar = !this.media?.ocultar;
  }

}

interface PickedMedia {
  provider: string;
  type? : string
}
