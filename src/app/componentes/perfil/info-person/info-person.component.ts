import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.css']
})
export class InfoPersonComponent implements OnInit {

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
