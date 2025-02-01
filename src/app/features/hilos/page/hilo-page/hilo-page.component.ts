import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { HiloComentariosComponent } from "../../components/hilo-comentarios/hilo-comentarios.component";
import { Hilo } from '../../interfaces/hilo.interface';
import { HiloService } from '../../services/hilo.service';
import { ActivatedRoute } from '@angular/router';
import { MediaBoxComponent } from '../../../shared/components/media-box/media-box.component';
import { HiloBodySkeletonComponent } from "../../components/hilo-body-skeleton/hilo-body-skeleton.component";

@Component({
  selector: 'hilo-page',
  imports: [HeaderComponent, HiloComentariosComponent, MediaBoxComponent, HiloBodySkeletonComponent],
  templateUrl: './hilo-page.component.html',
  styleUrl: './hilo-page.component.css',
})
export class HiloPageComponent implements OnInit{
  hilo = signal<undefined | Hilo>(undefined)

  hiloService = inject(HiloService);

  route = inject(ActivatedRoute)

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id') as string;

    this.hiloService.getHilo(id).subscribe((hilo) => {
      this.hilo.set(hilo)
    });
  }
}
