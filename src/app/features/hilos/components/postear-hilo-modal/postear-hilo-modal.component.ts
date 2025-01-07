import { Component, inject } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, RequiredValidator, Validators} from '@angular/forms';

import { DialogHeaderComponent } from "../../../shared/components/dialog-header/dialog-header.component";
import { InputLabeledComponent } from "../../../shared/components/input-labeled/input-labeled.component";
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'postear-hilo-modal',
  imports: [
    CommonModule,
    DialogHeaderComponent,
    InputLabeledComponent,
    ReactiveFormsModule
  ],
  templateUrl: './postear-hilo-modal.component.html',
  styleUrl: './postear-hilo-modal.component.css',
})
export class PostearHiloModalComponent {

  private fb : FormBuilder  = inject(FormBuilder);

  form = this.fb.group({
    titulo: [''],
    descripcion: [''],
    encuesta: this.fb.array<string>(['pedrooo']),
    portada: this.fb.control<File  |string | undefined>(undefined, {
      validators: [
        Validators.required
      ]
    })
  });

  get encuesta() {
    return this.form.get('encuesta') as FormArray;
  }

  get portada(){
    return this.form.get('portada') as FormControl<File  |string | undefined>
  }

  select(event:any){
    const  files :FileList = event.target.files;

    const  file : File= files[0];

    this.form.get('portada')?.setValue(file);

    console.log(this.form.get('portada'))
  }

}
