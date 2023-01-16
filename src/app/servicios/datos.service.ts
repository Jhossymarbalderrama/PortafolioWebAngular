import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDatos(): Observable<any>{
    return this.httpClient.get('../../assets/datos.json');
  }
}
