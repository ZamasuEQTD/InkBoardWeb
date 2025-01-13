export interface Categoria {
  nombre:string
  subcategorias : Subcategoria[]
}

export interface Subcategoria {
  id: string
  image : string
  nombre: string
}
