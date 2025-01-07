import { Component, ComponentRef, ElementRef, inject, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { ContenidoCensurable } from '../../../shared/interfaces/contenido-censurable.interface';
import { YoutubeThumbnailPipe } from "../../../shared/pipes/youtubeThumbnail.pipe";
import { Media } from '../../../shared/interfaces/media.interface';
import { PickFileInputComponent } from "../../../shared/components/pick-file-input/pick-file-input.component";
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentar-hilo-form',
  imports: [
    YoutubeThumbnailPipe,
    PickFileInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './comentar-hilo-form.component.html',
  styleUrl: './comentar-hilo-form.component.css',
})
export class ComentarHiloFormComponent {

  @ViewChild('fileRef') fileInput!: PickFileInputComponent;

  private fb : FormBuilder  = inject(FormBuilder);

  form = this.fb.group({
    texto: [''],
    spoiler: [false],
    file: this.fb.control<PickedMedia | undefined>(undefined, {
      validators: []
    }),
  });

  agregarMedia(picked:PickedMedia){
    this.form.patchValue({
      spoiler : false,
      file:picked
    })
  }

  eliminarMedia() :void {
    this.fileInput.clear();

    this.form.patchValue({
      file:  undefined
    })
  }


  get media(): PickedMedia | null | undefined {
    return this.form.get('file')!.value;
  }

  get spoiler():boolean {
    return this.form.get('spoiler')!.value as boolean;
  }
}
