import { Component, OnInit } from '@angular/core';
import {VehiculoService} from'../shared/vehiculo.service'
import { VehiculoModel} from '../shared/vehiculo.model';
import {ToastrService} from'ngx-toastr'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css'],
  providers:[VehiculoService]
})
export class IngresoListComponent implements OnInit {

  private vehiculosList:VehiculoModel[];
  private mensajeError:any;
  private cobroVehiculo:number;
  
  constructor(private vehiculoService:VehiculoService, private toastr:ToastrService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculoList().subscribe((vehiculos)=> {
      this.vehiculosList=vehiculos 
    },(err)=>{
      this.mensajeError = err.message;
      console.log("esto tambien"+err );
      this.toastr.info(err);
    });
    }

  sacarVehiculo(placaVehiculo:String){
    if(confirm('Esta seguro que es este el vehiculo que desea sacar ?')==true){

      this.vehiculoService.sacarVehiculo(placaVehiculo)
      .subscribe((x)=>{
        return this.vehiculoService.getVehiculoList().subscribe((vehiculos)=> {
         this.vehiculosList=vehiculos 
         this.cobroVehiculo = vehiculos;
        this.toastr.info('Vehiculo sacado con Exito'+' '+ JSON.stringify(x) , 'Vehiculo Retirado');
        },(err)=>{
          this.mensajeError = err.message;
          console.log(err );
          this.toastr.info(err);
        });
      },err=>{
        this.toastr.error(err.message);
      });
    }
  }
}
