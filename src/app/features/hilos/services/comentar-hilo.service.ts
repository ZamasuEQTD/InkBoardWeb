import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PickedMedia } from '../../shared/interfaces/picked-media.interface';
import { TagUtils } from '../../comentarios/utils/tags-utils';

@Injectable({
  providedIn: 'root'
})
export class ComentarHiloService {

  static cantidadMaximaDeTaggueos = 5;

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
    this.form.patchValue({
      file:  undefined
    })
  }


  tagguear(tag:string){
    var texto = this.form.get('texto')!.value! as string;

    if(TagUtils.incluyeTag(texto, tag)) return;

    if (this.alcanzoLimiteDeTaggueos(texto)) return;

    this.form.patchValue({
      texto: this.form.get('texto')!.value + '>>' + tag
    })
  }

  private alcanzoLimiteDeTaggueos(texto:string): boolean {
    return TagUtils.cantidadTags(texto) >= ComentarHiloService.cantidadMaximaDeTaggueos;
  }
}
