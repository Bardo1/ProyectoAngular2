import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  equipo:any[] =[
    {nombre:'Walter',
    especialidad:'Rey del universo',
    descripcion:'Deberian todos morir por huekkkkkkas'},
    {nombre:'Luis',
     especialidad:'lanza fuegos',
    descripcion:'bajar bbla blkljljljjablal'}
  ]
  constructor() {
    console.log("funcionando servicio");
   }

   obtenerEquipo(){
     return this.equipo;
   }

   obtenerUno(i){
     return this.equipo[i];
   }

}
