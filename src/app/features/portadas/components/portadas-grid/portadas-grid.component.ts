import { Component, Input, input } from '@angular/core';
import { Portada } from '../../interfaces/portada.interface';
import { PortadaComponent } from "../portada/portada.component";
import { PortadaSkeletonComponent } from "../portada-skeleton/portada-skeleton.component";

@Component({
  selector: 'app-portadas-grid',
  imports: [PortadaComponent, PortadaSkeletonComponent],
  templateUrl: './portadas-grid.component.html',
  styleUrl: './portadas-grid.component.css',
})
export class PortadasGridComponent {
  @Input() portadas !: Portada[];

  @Input() cargando!: boolean;

  l : number[] = Array(29).fill(1);

}
