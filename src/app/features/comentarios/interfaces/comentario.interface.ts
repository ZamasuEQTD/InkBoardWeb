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
  tag:                   string;
  tag_unico?:            string;
  recibir_notificaciones?:boolean;
  color:                  string;
  media?:                  Media;
}

export interface Detalles {
  tag:       string;
  tag_unico?:string;
  dados?:    string;
}
