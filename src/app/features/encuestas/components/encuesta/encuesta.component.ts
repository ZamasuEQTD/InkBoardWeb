import { Component, computed, inject, input, signal } from '@angular/core';
import { Encuesta } from '../../../hilos/interfaces/hilo.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encuesta',
  imports: [CommonModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css',
})
export class EncuestaComponent {

  private readonly http = inject(HttpClient)

  encuesta = input.required<Encuesta>();

  opcionSeleccionada = signal<string | undefined>(undefined);

  votosTotales = computed<number>(() => this.encuesta().respuestas.reduce((acc, respuesta) => acc + respuesta.votos, 0));

  votar(): void {

    if(!this.opcionSeleccionada()) return;
    
    this.http.post(`/api/encuestas/votar/encuesta/${this.encuesta().id}/respuesta/${this.opcionSeleccionada()}`, {}).subscribe();
  }

  seleccionarOpcion(opcion: string) {

    if(this.encuesta().respuesta_votada) return;

    if (opcion == this.opcionSeleccionada()) {
      this.opcionSeleccionada.set(undefined);

      return;
    }

    this.opcionSeleccionada.set(opcion)
  }


  estaSeleccionado(opcion: string): boolean {
    return this.opcionSeleccionada() === opcion;
  }
}
