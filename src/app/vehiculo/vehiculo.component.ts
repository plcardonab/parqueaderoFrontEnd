import { Component, OnInit } from '@angular/core';
import{VehiculoService} from'./shared/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  providers:[VehiculoService]
})
export class VehiculoComponent implements OnInit {
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {
  }

}
