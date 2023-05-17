import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.sass']
})
export class ProyectoComponent implements OnInit {
  parte = 0;
  @Input() currentProyecto: Proyecto = {
    id: 0,
    titulo: '',
    descripcion: '',
    introduccion: '',
    justificacion: '',
    objetivos: '',
    metodologia: '',
    conclusion: '',
    estado: '',
    setdata: function (item: any): void {
      throw new Error('Function not implemented.');
    }
  }
  oldProyecto: Proyecto = {
    id: 0,
    titulo: '',
    descripcion: '',
    introduccion: '',
    justificacion: '',
    objetivos: '',
    metodologia: '',
    conclusion: '',
    estado: '',
    setdata: function (item: any): void {
      throw new Error('Function not implemented.');
    }
  }

  constructor(
    private jsonService: JsonService,
    private route: ActivatedRoute,
    private router: Router) { }

  getProyecto(id: string): void {
    this.jsonService.get(id)
      .subscribe({
        next: (data) => {
          this.currentProyecto = data;
          this.oldProyecto = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  ngOnInit(): void {
    this.getProyecto(this.route.snapshot.params["id"]);
  }

  Siguiente(): void {
    if (this.parte <= 3) {
      this.parte = this.parte + 1
    }
  }
  Anterior(): void {
    if (this.parte >= 1) {
      this.parte = this.parte - 1
    }
  }
  actualizarProyecto(): void {
    if (
        (this.currentProyecto.introduccion === this.oldProyecto.introduccion) &&
        (this.currentProyecto.justificacion === this.oldProyecto.justificacion) &&
        (this.currentProyecto.objetivos === this.oldProyecto.objetivos) &&
        (this.currentProyecto.metodologia === this.oldProyecto.metodologia) &&
        (this.currentProyecto.conclusion === this.oldProyecto.conclusion)
    ) {
      this.currentProyecto.estado = 'Enviado';}
      else {
        this.currentProyecto.estado = 'Corregido';}

        this.jsonService.update(this.currentProyecto.id, this.currentProyecto)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      })
  }

}
