
export interface Hilo {
  id:                     string;
  titulo:                 string;
  descripcion:            string;
  autor_id:               null;
  es_op:                  boolean;
  cantidad_comentarios:   number;
  recibir_notificaciones: null;
  subcategoria:           Subcategoria;
  media:                  Media;
  encuesta:               Encuesta;
}

export interface Encuesta {
  id:               string;
  respuestas:       Respuesta[];
  respuesta_votada: string;
}

export interface Respuesta {
  id:        string;
  respuesta: string;
  votos:     number;
}

export interface  Media {
  provider:         string;
  spoiler:          boolean;
  url:              string;
  previsualizacion: string;
}

export interface Subcategoria {
  id:     string;
  nombre: string;
  imagen: string;
}
