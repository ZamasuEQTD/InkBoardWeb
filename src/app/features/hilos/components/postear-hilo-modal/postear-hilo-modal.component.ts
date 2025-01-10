import { Component, inject } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, RequiredValidator, Validators} from '@angular/forms';

import { DialogHeaderComponent } from "../../../shared/components/dialog-header/dialog-header.component";
import { InputLabeledComponent } from "../../../shared/components/input-labeled/input-labeled.component";
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';
import { CommonModule } from '@angular/common';
import { ContenidoCensurable } from '../../../shared/interfaces/contenido-censurable.interface';
import { DialogRef } from '@angular/cdk/dialog';
import { PickFileInputComponent } from "../../../shared/components/pick-file-input/pick-file-input.component";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { MediaPipe } from '../../../shared/pipes/media.pipe';

@Component({
  selector: 'postear-hilo-modal',
  imports: [
    CommonModule,
    DialogHeaderComponent,
    InputLabeledComponent,
    ReactiveFormsModule,
    PickFileInputComponent,
    MediaBoxComponent,
    MediaPipe
],
  templateUrl: './postear-hilo-modal.component.html',
  styleUrl: './postear-hilo-modal.component.css',
})
export class PostearHiloModalComponent {

  dialogRef = inject(DialogRef);

  close ():void {
     this.dialogRef.close();
   }

  private fb : FormBuilder  = inject(FormBuilder);

  form = this.fb.group({
    titulo: [''],
    descripcion: [''],
    encuesta: this.fb.array<string>([]),
    portada: this.fb.control<ContenidoCensurable<PickedMedia> | undefined>(undefined, {
      validators: [
        Validators.required
      ]
    })
  });

  get encuesta() : FormArray<FormControl<string | null>> {
    return (this.form.get('encuesta') as FormArray);
  }

  get portada(){
    return (this.form.get('portada') as FormControl<ContenidoCensurable<PickedMedia> | undefined>).value;
  }

  agregarPortada(pick: PickedMedia) :void {
    this.form.patchValue({
      portada : {
        ocultar : false,
        contenido : pick
      }
    })
  }

  eliminarPortada() :void {
    this.form.patchValue({
      portada: undefined
    })
  }

  togglesSpoiler() :void {
    this.form.patchValue({
      portada : {
        ocultar :!this.portada!.ocultar,
        contenido : this.portada!.contenido
      }
    })
  }

  agregarOpcionEncuesta() : void {
    const encuestaArray = this.form.get('encuesta') as FormArray;

    encuestaArray.push(this.fb.control(''));
  }

  eliminarOpcion(index : number) : void {
    this.encuesta.removeAt(index);

    console.log(this.encuesta);

  }
}
