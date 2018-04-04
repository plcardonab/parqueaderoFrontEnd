import { Component, OnInit } from '@angular/core';
import{VehiculoService} from'../shared/vehiculo.service'
import { VehiculoModel } from '../shared/vehiculo.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
  providers:[VehiculoService]
})
export class IngresoComponent implements OnInit {
  constructor(private vehiculoService:VehiculoService) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.reset();
    this.vehiculoService.vehiculoSeleccionado = {
      placa:'',
      cilindraje:null,
      tipo:''
    }
  }

}
