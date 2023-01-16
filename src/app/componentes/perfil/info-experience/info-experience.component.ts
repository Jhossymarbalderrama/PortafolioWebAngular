import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-info-experience',
  templateUrl: './info-experience.component.html',
  styleUrls: ['./info-experience.component.css']
})
export class InfoExperienceComponent implements OnInit {

  dataLocal: any;

  constructor(
    private DatosService:DatosService
  ) { }

  ngOnInit(): void {
    this.DatosService.getDatos().subscribe(data =>{
      this.dataLocal = data;
    });
  }

}
