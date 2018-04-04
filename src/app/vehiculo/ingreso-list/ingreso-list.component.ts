import { Component, OnInit } from '@angular/core';
import{VehiculoService}from'../shared/vehiculo.service'
@Component({
  selector: 'app-ingreso-list',
  templateUrl: './ingreso-list.component.html',
  styleUrls: ['./ingreso-list.component.css'],
  providers:[VehiculoService]
})
export class IngresoListComponent implements OnInit {

  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {
  }

}
