import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { ColorComentarioComponent } from "../color-comentario/color-comentario.component";
import { CommonModule } from '@angular/common';
import { TextoComponent } from "../texto/texto.component";
import { ColorPicker } from '../../../shared/util/color-picker-util';

@Component({
  selector: 'app-comentario',
  imports: [TiempoTranscurridoPipe, MediaBoxComponent, ColorComentarioComponent, CommonModule, TextoComponent],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent  {
  @Input() comentario!:Comentario;

  @Output() onTagguear = new EventEmitter<string>()


  colorTagUnico():string {
    return ColorPicker.generar(this.comentario.tag_unico!);
  }

  tagguear(){
    this.onTagguear.emit(this.comentario.tag)
  }
}
