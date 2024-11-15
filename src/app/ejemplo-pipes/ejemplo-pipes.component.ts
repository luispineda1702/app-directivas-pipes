import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  fechaActual = new Date()

  nombres = "luis angel"

  monto = 2321312

  porcentaje = 0.2234

  persona = {nombre:"Luis",apellido:"Salvat",rol:"Docente"}
}
