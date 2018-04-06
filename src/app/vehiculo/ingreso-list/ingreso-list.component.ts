import { Component, OnInit } from '@angular/core';
import {VehiculoService} from'../shared/vehiculo.service'
import { VehiculoModel} from '../shared/vehiculo.model';
import {ToastrService} from'ngx-toastr'
@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css'],
  providers:[VehiculoService]
})
export class IngresoListComponent implements OnInit {

  constructor(private vehiculoService:VehiculoService, private toastr:ToastrService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculoList();
  }

  sacarVehiculo(placaVehiculo:String){
    if(confirm('Esta seguro que es este el vehiculo que desea sacar ?')==true){

      this.vehiculoService.sacarVehiculo(placaVehiculo)
      .subscribe(x=>{
        this.vehiculoService.getVehiculoList();
        this.toastr.warning('Vehiculo sacado con Exito', 'Vehiculo Retirado')
      });
    }
  }

}
