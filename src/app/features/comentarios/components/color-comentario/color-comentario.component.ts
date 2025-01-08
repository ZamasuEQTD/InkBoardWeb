import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-comentario',
  imports: [],
  templateUrl: './color-comentario.component.html',
  styleUrl: './color-comentario.component.css',
})
export class ColorComentarioComponent {
  @Input() color!:string;
}
