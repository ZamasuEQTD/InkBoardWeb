import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-spiler-advertencia',
  imports: [],
  templateUrl: './spiler-advertencia.component.html',
  styleUrl: './spiler-advertencia.component.css',
})
export class SpilerAdvertenciaComponent {

  spoiler = input.required<boolean>();

  onToggle = output<void>();


  toggle(){
    this.onToggle.emit();
  }
}
