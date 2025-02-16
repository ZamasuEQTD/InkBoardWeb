import { Component, Input } from '@angular/core';
import { Registro } from '../../interfaces/registro.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [
    RouterModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  @Input() registro!:Registro;

  @Input() tipo! : 'hilos' | 'comentarios';
}
