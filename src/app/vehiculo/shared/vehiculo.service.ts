import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from'@angular/http';
import {Observable} from 'rxjs/Observable';
import'rxjs/add/operator/map';
import'rxjs/add/operator/toPromise';


import {VehiculoModel} from './vehiculo.model';


@Injectable()
export class VehiculoService {

  vehiculoSeleccionado = new VehiculoModel();
  
  constructor(private http:Http) { }
  postIngresar(vehiculo:VehiculoModel){
    var body = JSON.stringify(vehiculo);
    var headerOptions = new Headers({'Content-type':'application/json'});
    var requestOptions = new RequestOptions({method:RequestMethod.Post, headers :headerOptions});
    return this.http.post('http://localhost:8090/parquear',body,requestOptions).map(x => x.json());

  }
}
