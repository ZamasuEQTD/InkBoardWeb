import { Component } from '@angular/core';
import { Comentario } from '../../../comentarios/interfaces/comentario.interface';
import { ComentarioComponent } from "../../../comentarios/components/comentario/comentario.component";
import { ComentarioSkeletonComponent } from "../../../comentarios/components/comentario-skeleton/comentario-skeleton.component";
import { ComentarHiloFormComponent } from "../comentar-hilo-form/comentar-hilo-form.component";

@Component({
  selector: 'app-hilo-comentarios',
  imports: [ComentarioComponent, ComentarioSkeletonComponent, ComentarHiloFormComponent],
  templateUrl: './hilo-comentarios.component.html',
  styleUrl: './hilo-comentarios.component.css',
})
export class HiloComentariosComponent {
  comentarios : Comentario[] = Array(20).fill({
    id :"jej",
    color : "amarillo",
    created_at :  new Date("2025-01-05T13:37:00"),
    destacado : false,
    es_autor: false,
    texto : "goooooooooosssoooood",
    respuestas : [],
    responde : [ ],
    autor_id : "",
    recibir_notificaciones :false,
    es_op: false,
    media : {
      provider : "video",
      es_spoiler : false,
      url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    detalles: {
      tag : "FASFASFS"
    },
    autor : {
      nombre:"Anonimo",
      rango: "ANON"
    }
  });
}
