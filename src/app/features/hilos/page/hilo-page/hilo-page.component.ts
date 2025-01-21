import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { HiloBodyComponent } from "../../components/hilo-body/hilo-body.component";
import { HiloComentariosComponent } from "../../components/hilo-comentarios/hilo-comentarios.component";
import { Hilo } from '../../interfaces/hilo.interface';
import { HiloService } from '../../services/hilo.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Comentario } from '../../../comentarios/interfaces/comentario.interface';

@Component({
  selector: 'hilo-page',
  imports: [HeaderComponent, HiloBodyComponent, HiloComentariosComponent],
  templateUrl: './hilo-page.component.html',
  styleUrl: './hilo-page.component.css',
})
export class HiloPageComponent implements OnInit{
  hiloService = inject(HiloService);

  route = inject(ActivatedRoute)

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id') as string;

    this.hiloService.cargarHilo(id)
  }
}
