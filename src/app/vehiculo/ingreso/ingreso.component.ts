import { Component, OnInit } from '@angular/core';
import{VehiculoService} from'../shared/vehiculo.service';
import { VehiculoModel } from '../shared/vehiculo.model';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers:[VehiculoService]
})
export class IngresoComponent implements OnInit {

   private vehiculoModel = new VehiculoModel();
   private mensajeError:string;
  constructor(private vehiculoService:VehiculoService,
  private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.vehiculoService.getVehiculoList();
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
  onSubmit(form:NgForm ){
    this.vehiculoService.postIngresar(form.value).subscribe(data =>{
      this.resetForm(form);
    })
  }
  procesarFormulario(form:NgForm){
    this.vehiculoService.postIngresar(this.vehiculoModel).subscribe(vehiculo=>{
      this.resetForm(form);
      this.vehiculoService.getVehiculoList();
      this.toastr.success('El vehiculo se ha guardado con exito', 'Vehiculo Parqueado')
    },error=>{
      this.toastr.error('El vehiculo no se pudo guardar', 'Vehiculo  No Parqueado')
    })
    this.vehiculoService.getVehiculoList();
  }
}
