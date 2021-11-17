import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ccursos(){
    //do your any operations
      this.router.navigate(['cursos']);
    }

  cdesarrollo(){
    //do your any operations
      this.router.navigate(['desarrollo']);
    }

  cmantenimiento(){
    //do your any operations
     this.router.navigate(['mantenimiento']);
    }

  cventamodulos(){
    //do your any operations
      this.router.navigate(['venta-modulos']);
    }


  ngOnInit(): void {
  }

}