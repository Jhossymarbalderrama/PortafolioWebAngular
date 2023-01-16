import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-info-education',
  templateUrl: './info-education.component.html',
  styleUrls: ['./info-education.component.css']
})
export class InfoEducationComponent implements OnInit {

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
