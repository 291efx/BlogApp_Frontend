export interface Post {
  id: number;
  titulo: string;
  descripcion: string;
  rutaArchivo: string;         
  fechaPublicacion: Date;         
  usuario:   {
    nombre: string; 
  }        
  cantidadComentarios: number;     // si lo estás usando
}
