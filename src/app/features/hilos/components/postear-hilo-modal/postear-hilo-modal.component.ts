import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, RequiredValidator, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

import { DialogHeaderComponent } from "../../../shared/components/dialog-header/dialog-header.component";
import { InputLabeledComponent } from "../../../shared/components/input-labeled/input-labeled.component";
import { PickedMedia } from '../../../shared/interfaces/picked-media.interface';
import { CommonModule } from '@angular/common';
import { ContenidoCensurable } from '../../../shared/interfaces/contenido-censurable.interface';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { PickFileInputComponent } from "../../../shared/components/pick-file-input/pick-file-input.component";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { MediaPipe } from '../../../shared/pipes/media.pipe';
import { DialogComponent } from "../../../shared/components/dialog/dialog.component";
import { SeleccionarSubcategoriaDialogComponent } from '../../../categorias/components/seleccionar-subcategoria-dialog/seleccionar-subcategoria-dialog.component';
import { Subcategoria } from '../../../categorias/interfaces/subcategoria.interface';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../../core/interfaces/api-response.interface';
import { Router } from '@angular/router';
import { YoutubeUtil } from '../../../shared/util/youtube-util';
import { YoutubeIdPipe } from '../../../shared/pipes/youtubeId.pipe';

@Component({
  selector: 'postear-hilo-modal',
  imports: [
    CommonModule,
    InputLabeledComponent,
    ReactiveFormsModule,
    PickFileInputComponent,
    MediaBoxComponent,
    MediaPipe,
    DialogComponent,
  ],
  templateUrl: './postear-hilo-modal.component.html',
  styleUrl: './postear-hilo-modal.component.css',
})
export class PostearHiloModalComponent {


  posteando = signal(false);

  private http = inject(HttpClient);
  private router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);

  private dialog = inject(Dialog);

  private dialogRef = inject(DialogRef);


  form = this.fb.group({
    titulo: [''],
    descripcion: ['',],
    subcategoria: this.fb.control<Subcategoria | null>(null),
    encuesta: this.fb.array<string>([]),
    embed: ['', [esYoutubeUrl()]],
    portada: this.fb.control<ContenidoCensurable<PickedMedia> | undefined>(undefined, {
      validators: [
        Validators.required
      ]
    }),
    dados: [false],
    idUnico: [false]
  });

  get encuesta(): FormArray<FormControl<string | null>> {
    return (this.form.get('encuesta') as FormArray);
  }

  get portada() {
    return (this.form.get('portada') as FormControl<ContenidoCensurable<PickedMedia> | undefined>).value;
  }

  agregarPortada(pick: PickedMedia): void {
    this.form.patchValue({
      portada: {
        ocultar: false,
        contenido: pick
      }
    })
  }

  agregarEmbed() {
    if (this.form.get('embed')?.valid) {
      const url: string = this.form.get('embed')!.value as string || '';

      this.agregarPortada({
        source: url,
        type: 'youtube'
      })
    }
  }

  eliminarPortada(): void {
    this.form.patchValue({
      portada: undefined
    })
  }

  togglesSpoiler(): void {
    this.form.patchValue({
      portada: {
        ocultar: !this.portada!.ocultar,
        contenido: this.portada!.contenido
      }
    })
  }

  agregarOpcionEncuesta(): void {
    const encuestaArray = this.form.get('encuesta') as FormArray;

    encuestaArray.push(this.fb.control(''));
  }

  eliminarOpcion(index: number): void {
    this.encuesta.removeAt(index);
  }

  seleccionarSubcategoria() {
    var seleccionarSubcategoriaDialog = this.dialog.open(SeleccionarSubcategoriaDialogComponent, {
      data: {
        onSubcategoriaSeleccionada: (subcategoria: Subcategoria) => {
          this.form.patchValue({
            subcategoria
          })
          seleccionarSubcategoriaDialog.close()
        }
      }
    })
  }

  postear(): void {
    if (this.posteando()) return;

    var data = new FormData();

    data.append("titulo", this.form.get("titulo")?.value || "");

    data.append("descripcion", this.form.get("descripcion")?.value || "");

    data.append("Subcategoria", this.form.get("subcategoria")?.value?.id || "");

    data.append("DadosActivados", this.form.get("dados")?.value?.toString() || "false");

    data.append("IdUnicoActivado", this.form.get("idUnico")?.value?.toString() || "false");

    const encuesta = this.form.get("encuesta")?.value || [];

    encuesta.forEach((opcion: string | null, index: number) => {
      data.append(`Encuesta[${index}]`, opcion!);
    });

    const portada = this.form.get("portada")?.value;

    if (portada) {
      if (this.form.get("embed")?.valid) {
        data.append("Embed", this.form.get("embed")?.value || "");
      } else {
        data.append("File", portada.contenido.file!);
      }



      data.append("Spoiler", portada.ocultar.toString());
    }

    this.http.post<ApiResponse<string>>("/api/hilos/postear", data).subscribe((result) => {
      const hiloId = result.data;

      this.dialogRef.close();

      this.router.navigateByUrl("/hilo/" + hiloId);
    });
  }
}



export function esYoutubeUrl(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const esYoutube = YoutubeUtil.esYoutubeEnlace(control.value || '');

    return !esYoutube ? { enlaceInvalido: { value: control.value } } : null;
  };
}
