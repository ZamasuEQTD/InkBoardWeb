import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Portada, Banderas } from '../../interfaces/portada.interface';

import { MenuModule } from 'primeng/menu';
import { HiloService } from '../../../hilos/services/hilo.service';


@Component({
  selector: 'portada',
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css',
})
export class PortadaComponent implements OnInit{
  @Input() portada!:Portada;

  public icons: IconTag[] = []

  private service = inject(HiloService);

  ngOnInit(): void {
    this.icons = [
      {
        color: 'bg-yellow-500',
        icon: 'fa-solid fa-thumbtack',
        active: this.portada.banderas.es_sticky
      },
      {
        color: 'bg-blue-500',
        icon: 'fa-solid fa-chart-simple',
        active: this.portada.banderas.tiene_encuesta
      },
      {
        color: 'bg-blue-500',
        icon: 'fa-solid fa-dice-two',
        active: this.portada.banderas.dados_activado
      },
    ];
  }


  public opciones : MenuItem[] = [
    {
      label: "Denunciar",
    },
    {
      label: "Seguir",
      command:()=> {
        this.service.seguir(this.portada.id).subscribe()
      }
    },
    {
      label: "Cambiar Notificaciones",
      command:()=> {
        this.service.cambiarNotificaciones(this.portada.id).subscribe()
      }
    },
    {
      label: "Ocultar",
      command:()=> {
        this.service.ocultar(this.portada.id).subscribe()
      }
    },
    {
      label: "Poner en favoritos",
      command:()=> {
        this.service.ponerEnFavoritos(this.portada.id).subscribe()
      }
    },
    {
      label: "Establecer sticky",
      command: () => {
        this.service.establecerSticky(this.portada.id).subscribe();
      }
    },
    {
      label: "Eliminar sticky",
      command: () => {
        this.service.eliminarSticky(this.portada.id).subscribe();
      }
    },
    {
      label: "Eliminar",
      command: () => {
        this.service.eliminar(this.portada.id).subscribe();
      }
    },
    {
      label: "Ver usuario",
      command: (event) => {
      }
    }
  ];
}

interface IconTag {
  icon:string
  color: string
  active: boolean
}
