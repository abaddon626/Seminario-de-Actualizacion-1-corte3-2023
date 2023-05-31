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
  @Input() currentProyecto: Proyecto = {
    id: 0,
    titulo: '',
    descripcion: '',
    introduccion: '',
    justificacion: '',
    objetivos: '',
    metodologia: '',
    conclusion: '',
    comentario: '',
    estado: '',
    setdata: function (item: any): void {
      throw new Error('Function not implemented.');
    }
  }

  alerta = false

  parte = 0

  Alerta(): void {
    this.alerta = true
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
    if (this.currentProyecto.comentario === '') {
      this.currentProyecto.estado = 'enviado';
    } else {
      this.currentProyecto.estado = 'corregido';
    }
    this.jsonService.update(this.currentProyecto.id, this.currentProyecto)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getProyecto(this.route.snapshot.params["id"])
        },
        error: (e) => console.error(e)
      })
  }

  aprobarProyecto(): void {
    this.currentProyecto.estado = 'aprobado';
    this.jsonService.update(this.currentProyecto.id, this.currentProyecto)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getProyecto(this.route.snapshot.params["id"])
        },
        error: (e) => console.error(e)
      })
  }

}
