import { Component, ElementRef, signal, ViewChild } from '@angular/core';
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


  public media = signal<ContenidoCensurable<PickedMedia> | undefined>(undefined);


  onFileSelected(event: any) {
    const  files :FileList = event.target.files;

    const  file : File= files[0];

    console.log(file)

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.media.set({
        ocultar:false,
        contenido: {
          provider :  reader.result! as string,
          type : file.type.split('/')[0]
        }
      });
    }

    reader.readAsDataURL(event.target.files[0]);
  }


  public eliminarMedia() :void {
    this.fileInput.nativeElement.value = '';

    this.media.set(undefined);
  }

  toggleOcultar(){
    this.media.update((e) => ({
      ...e!,
      ocultar: !e!.ocultar
    }));
  }

}

interface PickedMedia {
  provider: string;
  type? : string
}
