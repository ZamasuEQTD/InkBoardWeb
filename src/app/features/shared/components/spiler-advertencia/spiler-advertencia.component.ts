import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-spiler-advertencia',
  imports: [],
  templateUrl: './spiler-advertencia.component.html',
  styleUrl: './spiler-advertencia.component.css',
})
export class SpilerAdvertenciaComponent {
  spoiler = signal(true);

  toggle(){
    this.spoiler.update(s=> !s);
  }
}
