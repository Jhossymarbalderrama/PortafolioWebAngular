import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  dataLocal: any;

  constructor(
    private DatosService: DatosService
  ) { }

  ngOnInit(): void {
    this.DatosService.getDatos().subscribe(data =>{
      this.dataLocal = data;
    });
  }

}
