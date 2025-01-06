import { Media } from "../../shared/interfaces/media.interface";

export interface Comentario {
  id:                     string;
  texto:                  string;
  created_at:             Date;
  autor_id?:              string;
  es_autor:               boolean;
  destacado:              boolean;
  respuestas:             string[];
  responde:               string[];
  es_op:                  boolean;
  recibir_notificaciones?:boolean;
  color:                  string;
  autor:                  Autor;
  detalles:               Detalles;
  media?:                  Media;
}

export interface Autor {
  nombre: string;
  rango:  string;
}

export interface Detalles {
  tag:       string;
  tag_unico?:string;
  dados?:    string;
}


