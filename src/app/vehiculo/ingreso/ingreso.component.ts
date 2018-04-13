import { Component, OnInit } from '@angular/core';
import{VehiculoService} from'../shared/vehiculo.service';
import { VehiculoModel } from '../shared/vehiculo.model';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import { IngresoListComponent } from '../ingreso-list/ingreso-list.component';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers:[VehiculoService]
})
export class IngresoComponent implements OnInit {

   private vehiculoModel = new VehiculoModel();
   private mensajeError:string;
   private vehiculosList:any;

  constructor(private vehiculoService:VehiculoService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.vehiculoService.getVehiculoList().subscribe((vehiculos)=> {
      this.vehiculosList=vehiculos 
    },(err)=>{
      this.mensajeError = err.message;
      console.log("esto tambien"+err );
      this.toastr.info(err);
    })
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.reset();
    this.vehiculoModel = {
      placa:'',
      cilindraje:'',
      tipo:'',
      fechaIngreso:null
    }
  }
  procesarFormulario(form:NgForm){
    this.vehiculoService.postIngresar(this.vehiculoModel).subscribe(vehiculo=>{
      this.resetForm(form);
      this.toastr.success('El vehiculo se ha guardado con exito', 'Vehiculo Parqueado')
    },(err)=>{
      this.mensajeError = err.message;
      console.log(err );
      this.toastr.error(err);
      this.resetForm(form);
    })
   
  }
}
