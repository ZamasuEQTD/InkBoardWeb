export interface Portada {
  id:                     string;
  titulo:                 string;
  autor_id?:              string;
  es_op:                  boolean;
  es_sticky:              boolean;
  es_nuevo:               boolean;
  subcategoria:           string;
  recibir_notificaciones?:boolean;
  banderas:               Banderas;
  miniatura:              Miniatura;
}

export interface Banderas {
  dados_activados:   boolean;
  id_unico_activado: boolean;
  tiene_encuesta:    boolean;
}

export interface Miniatura {
  es_spoiler: boolean;
  url:        string;
}
