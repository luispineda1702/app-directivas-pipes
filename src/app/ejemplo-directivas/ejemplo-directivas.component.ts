import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directivas',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo-directivas.component.html',
  styleUrl: './ejemplo-directivas.component.css'
})
export class EjemploDirectivasComponent {

  mostrarAlumnos = false
  mostrarCursos = false

  alumnosLista: Alumno=[]
  cursosLista: Curso = []

  verAlumnos():void{
    this.mostrarAlumnos = true
    this.alumnosLista.push({id:1,nombre:"Luis Angel",apellido:"Salvat"})
    this.alumnosLista.push({id:2,nombre:"Juan Jose",apellido:"Mendoza"})
    this.alumnosLista.push({id:3,nombre:"Maria Paz",apellido:"Calderon"})
    this.alumnosLista.push({id:4,nombre:"Armando Paredes",apellido:"Rotas"})
  }

  verCursos():void{
    this.mostrarCursos = true
    this.cursosLista.push({id:1,nombre:"Desarrollo Web",precio:1230})
    this.cursosLista.push({id:2,nombre:"Desarrollo Aplicaciones Móviles",precio:4030})
    this.cursosLista.push({id:3,nombre:"Base de Datos 1",precio:2330})
    this.cursosLista.push({id:4,nombre:"Scrum",precio:5230}) 
  }
}

type Alumno = Array<{id:number; nombre:string; apellido:string}>
type Curso = Array<{id:number; nombre:string; precio:number}>
