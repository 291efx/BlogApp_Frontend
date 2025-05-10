export interface Post {
  id: number;
  titulo: string;
  descripcion: string;
  rutaArchivo: string;             // ✅ imagen o archivo
  fechaPublicacion: Date;          // ✅ para pipe date
  usuario:   {
    nombre: string; 
  }        // ✅ mostrar nombre del usuario
  cantidadComentarios: number;     // si lo estás usando
}
