import { ChangeDetectionStrategy, Component, inject, OnInit, signal,  } from '@angular/core';


import { HeaderComponent } from "../../../core/components/header/header.component";
import { Portada } from '../../../portadas/interfaces/portada.interface';
import { PortadasGridComponent } from "../../../portadas/components/portadas-grid/portadas-grid.component";
import { PostearHiloModalButtonComponent } from "../../components/postear-hilo-modal-button/postear-hilo-modal-button.component";
import { HomeService } from '../../services/home.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    PortadasGridComponent,
    PostearHiloModalButtonComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{


  portadas = signal<Portada[]>([]);

  isLoading = signal(false);

  private service = inject(HomeService);

  ngOnInit(): void {
    this.cargarPortadas();
  }

  cargarPortadas() {
    if(this.isLoading()) return;

    this.isLoading.set(true);

    var obs =  this.service.cargarPortadas();

    obs.pipe(
      finalize(() => this.isLoading.set(false))
    )
    .subscribe((portadas) => {
      this.portadas.update((p)=> [...p, ...portadas])
    })
  }
}
