import { ChangeDetectionStrategy, Component,  } from '@angular/core';


import { PortadaSkeletonComponent } from "../../../portadas/components/portada-skeleton/portada-skeleton.component";
import { HeaderComponent } from "../../../core/components/header/header.component";
import { Portada } from '../../../portadas/components/interfaces/portada.interface';
import { PortadaComponent } from "../../../portadas/components/portada/portada.component";
@Component({
  selector: 'app-home-page',
  imports: [
    PortadaSkeletonComponent,
    HeaderComponent,
    PortadaComponent,
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  l : number[] = Array(29).fill(1);

  private _portadas: Portada[] = [{
    id: "1",
    titulo: "Primera Portada",
    es_op: true,
    es_sticky: false,
    es_nuevo: true,
    subcategoria: "SPDA",
    recibir_notificaciones: true,
    banderas: {
      dados_activados: false,
      id_unico_activado: true,
      tiene_encuesta: false,
    },
    miniatura: {
      es_spoiler: false,
      url: "https://wallpapers.com/images/featured/fondos-de-goku-vhm3f71ddueli0kl.jpg",
    },
  },
  {
    id: "2",
    titulo: "Segunda Portada",
    es_op: false,
    es_sticky: true,
    es_nuevo: false,
    subcategoria: "FTAS",
    recibir_notificaciones: false,
    banderas: {
      dados_activados: true,
      id_unico_activado: false,
      tiene_encuesta: true,
    },
    miniatura: {
      es_spoiler: true,
      url: "https://wallpapers.com/images/featured/fondos-de-goku-vhm3f71ddueli0kl.jpg",
    },
  },];

  public loading = true;

  public get portadas() : Portada[] {
    return this._portadas;
  }
}
