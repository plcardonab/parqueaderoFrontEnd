import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from'@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import'rxjs/add/operator/catch';
import'rxjs/add/operator/map';
import'rxjs/add/operator/toPromise';
import {VehiculoModel} from './vehiculo.model';


@Injectable()
export class VehiculoService {
  private baseUrl:string = 'http://localhost:8090'; 
  private headerOptions = new Headers({'Content-type':'application/json'});
  private requestOptions = new RequestOptions({method:RequestMethod.Post, headers :this.headerOptions});
  private headers = new Headers({'Content-Type':'application/json'});
  // private options = new RequestOptions({headers:this.headers});
  private mensajeError:any;
  public vehiculoSeleccionado:VehiculoModel; 
  private vehiculoList : VehiculoModel[];
  private cobroVehiculo:number;  
  
  constructor(private http:Http) { }

  postIngresar(vehiculo:VehiculoModel){
    var body = JSON.stringify(vehiculo);
    return this.http.post(this.baseUrl+'/parquearVehiculo',body, this.requestOptions).map((response:Response)=>{
    }).catch(
      this.errorHandler
    )
  }
  getVehiculoList(){
    return this.http.get(this.baseUrl+'/vehiculosParqueados').map((data:Response) => data.json())
    .catch(this.errorHandler);
  }
  sacarVehiculo(placaVehiculo:String){
    return this.http.patch(this.baseUrl+'/sacarVehiculo/'+ placaVehiculo ,this.requestOptions).
    map((res:Response) =>res.json()).catch(this.errorHandler);
  }
  errorHandler(error:Response | any){
    let errMsg: any;
    if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    console.log(err);
    errMsg = ` ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
    }
}
