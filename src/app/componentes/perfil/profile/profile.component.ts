import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  dataLocal: any;

  constructor(
    private DatosService: DatosService
  ) { }

  ngOnInit(): void {
    this.DatosService.getDatos().subscribe(data =>{
      this.dataLocal=data;
    }); 
  }

}
