export class Proyecto {
  id?: number;

  titulo?: string;
  descripcion?: string;

  introduccion?: string;
  justificacion?: string;
  objetivos?: string;
  metodologia?: string;
  conclusion?: string;

  comentario?: string;

  estado?: any;
    setdata(item: any) {
      this.id = item.id
      this.titulo = item.titulo
      this.descripcion = item.descripcion
      this.introduccion = item.introduccion
      this.justificacion = item.justificacion
      this.objetivos = item.objetivos
      this.metodologia = item.metodologia
      this.conclusion = item.conclusion
      this.comentario = item.comentario
      this.estado = item.estado
  }
}
