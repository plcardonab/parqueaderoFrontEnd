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
  private mensajeError:string;
  public vehiculoSeleccionado:VehiculoModel; 
  private vehiculoList : VehiculoModel[];  
  
  constructor(private http:Http) { }

  postIngresar(vehiculo:VehiculoModel){
    var body = JSON.stringify(vehiculo);
    // return this.http.post('http://localhost:8090/parquear',body,requestOptions).map(x => x.json());
    // return this.http.post(this.baseUrl+'/parquearVehiculo',body, this.requestOptions).map(res => res.json())
    return this.http.post(this.baseUrl+'/parquearVehiculo',body, this.requestOptions).map((response:Response)=>{console.log(response)})
     .catch(this.errorHandler);
  }
  getVehiculoList(){
    this.http.get(this.baseUrl+'/vehiculosParqueados').map((data:Response) => {
      return data.json() as VehiculoModel[];
    }).toPromise().then(x =>{
      this.vehiculoList=x;
    })
  }
  sacarVehiculo(placaVehiculo:String){
    return this.http.patch(this.baseUrl+'/sacarVehiculo/'+ placaVehiculo ,this.requestOptions).map(res => {console.log(res)
    });
  }
  errorHandler(error:Response){

    if(error.status==500){
      this.mensajeError = "No se puede Ingresar Vehiculo";
    }
    return Observable.throw(this.mensajeError || "ServerError");
  }
}
