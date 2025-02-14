import { Component, computed, ElementRef, EventEmitter, inject, Input, OnInit, Output, signal, ViewChild } from '@angular/core';
import { Comentario } from '../../interfaces/comentario.interface';
import { TiempoTranscurridoPipe } from "../../../core/pipes/tiempoTranscurrido.pipe";
import { MediaBoxComponent } from "../../../shared/components/media-box/media-box.component";
import { ColorComentarioComponent } from "../color-comentario/color-comentario.component";
import { CommonModule } from '@angular/common';
import { ColorPicker } from '../../../shared/util/color-picker-util';
import { AutorRolePipe } from "../../../core/pipes/autor_role.pipe";
import { MenuItem } from 'primeng/api';
import { ComentariosService } from '../../services/comentarios.service';
import { MenuModule } from 'primeng/menu';
import { HiloPageService } from '../../../hilos/services/hilo-page.service';

@Component({
  selector: 'app-comentario',
  imports: [
    MenuModule,
    TiempoTranscurridoPipe, MediaBoxComponent, ColorComentarioComponent, CommonModule, AutorRolePipe],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export class ComentarioComponent implements OnInit {
  @Input() comentario!: Comentario;

  @ViewChild("comentarioRef") comentarioRef!: ElementRef<HTMLDivElement>;

  @Output() onTagguear = new EventEmitter<string>()

  @Input() hilo!: string;

  @Input() scrollContainerRef!: HTMLDivElement;

  comentarioSeleccionado = signal<Comentario|undefined> (undefined);

  hayComentarioSeleccionado = computed<boolean>(()=>this.comentarioSeleccionado() !== undefined );

  pageService = inject(HiloPageService);

  sections: TextoSection[] = [];

  ngOnInit(): void {
    const regexs = /(>>[A-Z0-9]{8})|(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;
    let lastIndex = 0;
    let match;

    while ((match = regexs.exec(this.comentario.texto)) !== null) {
      // Texto antes del match
      if (match.index > lastIndex) {
        this.sections.push({
          type: 'text',
          content: this.comentario.texto.substring(lastIndex, match.index)
        });
      }

      // Determinar tipo de match
      if (match[1]) { // Tag (grupo 1)

        if (!this.comentario.responde_a.includes(match[1].substring(2))) {
          this.sections.push({
            type: 'text',
            content: match[1]
          });
        } else {
          this.sections.push({
            type: 'tag',
            content: match[1]
          });
        }

      } else if (match[2]) { // URL (grupo 2)
        this.sections.push({
          type: 'link',
          content: match[2]
        });
      }

      lastIndex = regexs.lastIndex;
    }


    if (lastIndex < this.comentario.texto.length) {
      this.sections.push({
        type: 'text',
        content: this.comentario.texto.substring(lastIndex)
      });
    }

  }

  private service = inject(ComentariosService);

  public opciones: MenuItem[] = [
    {
      label: "Denunciar",
    },
    {
      label: "Desactivar notificaciones",
    },

    {
      label: "Ocultar",
      command: () => {
        this.service.ocultar(this.comentario.id, this.hilo).subscribe()
      }
    },
    {
      label: "Destacar",
      command: () => {
        this.service.destacar(this.comentario.id, this.hilo).subscribe();
      }
    },

    {
      label: "Eliminar",
      command: () => {
        this.service.eliminar(this.comentario.id, this.hilo).subscribe();
      }
    },
    {
      label: "Ver usuario",
      command: (event) => {
      }
    }
  ];

  colorTagUnico(): string {
    return ColorPicker.generar(this.comentario.tag_unico!);
  }

  tagguear() {
    this.onTagguear.emit(this.comentario.tag)
  }

  hoverPosition = { top: 0, left: 0 };


  mostrarRespuesta(tag:string) {
    var c:Comentario | undefined = this.pageService.comentariosDic[tag];

    if(c) {
      this.comentarioSeleccionado.set(c);
      this.calculateHoverPosition();

    }

  }

  ocultarRespuesta() {
    this.comentarioSeleccionado.set(undefined);
  }

  private calculateHoverPosition(): void {
    if (!this.comentarioRef.nativeElement || !this.scrollContainerRef) {
      return;
    }

    const boxRect = this.comentarioRef.nativeElement.getBoundingClientRect();
    const container = this.scrollContainerRef;
    const containerRect = container.getBoundingClientRect();

    this.hoverPosition = {
      top: boxRect.top,
      left: containerRect.left - 150,
    };
  }
}

interface TextoSection {
  type: "text" | "link" | "tag"
  content: string
}
