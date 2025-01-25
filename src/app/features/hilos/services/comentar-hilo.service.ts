import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PickedMedia } from '../../shared/interfaces/picked-media.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentarHiloService {
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

  static tag_regex = />>[A-Z0-9]{8}/g

  tagguear(tag:string){
    if((this.form.get('texto')!.value! as string ).includes('>>' + tag)){
      return;
    }

    const matches = Array.from((this.form.get('texto')!.value! as string).matchAll(ComentarHiloService.tag_regex)).length;

    if (matches >= 5) {
      return;
    }

    this.form.patchValue({
      texto: this.form.get('texto')!.value + '>>' + tag
    })
  }
}
