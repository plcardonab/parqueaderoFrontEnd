import { Injectable } from '@angular/core';
import {VehiculoModel} from './vehiculo.model';

@Injectable()
export class VehiculoService {

  vehiculoSeleccionado = new VehiculoModel();
  
  constructor() { }

}
