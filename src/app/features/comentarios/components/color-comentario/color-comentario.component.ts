import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-comentario',
  imports: [
    CommonModule
  ],
  templateUrl: './color-comentario.component.html',
  styleUrl: './color-comentario.component.css',
})
export class ColorComentarioComponent {
  @Input() color!:string;
}
