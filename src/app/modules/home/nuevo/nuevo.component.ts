import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.sass']
})
export class NuevoComponent implements OnInit {

  proyectos?: Proyecto[]
  proyecto: Proyecto = {
    id: 0,
    titulo: '',
    descripcion: '',
    introduccion: '',
    justificacion: '',
    objetivos: '',
    metodologia: '',
    conclusion: '',
    estado: '',
    setdata(item: any) {
      this.id = item.id
      this.titulo = item.titulo
      this.descripcion = item.descripcion
      this.introduccion = item.introduccion
      this.justificacion = item.justificacion
      this.objetivos = item.objetivos
      this.metodologia = item.metodologia
      this.conclusion = item.conclusion
      this.estado = item.estado
  }
  }
  constructor(
    private jsonService: JsonService) { }

  ngOnInit(): void {
    this.mostrarProyectos()
  }

  mostrarProyectos(): void {
    this.jsonService.getAll().subscribe((res: any)=>{
      this.proyectos = [];
      res.forEach((item: any) => {
        let aux = new Proyecto
        aux.setdata(item)
        this.proyectos?.push(aux)
      });
    })
  }

  guardarProyecto(): void {
    const data = {
      id: this.proyecto.id,
      titulo: this.proyecto.titulo,
      descripcion: this.proyecto.descripcion,
      introduccion: this.proyecto.introduccion,
      justificacion: this.proyecto.justificacion,
      objetivos: this.proyecto.objetivos,
      metodologia: this.proyecto.metodologia,
      conclusion: this.proyecto.conclusion,
      estado: 'borrador',
    };
    this.jsonService.create(data)
      .subscribe({
        next: (res) => {
          this.mostrarProyectos()
          console.log(res)
        },
        error: (e) => console.error(e)
      })
  }

}
