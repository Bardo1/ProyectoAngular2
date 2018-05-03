import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:any = 'appjlkljkljkjlk';
   title1:string = 'Novedades';
   show:boolean = true;

   animales: Array<any>= [
      { tipo: 'Home', nombre: 'cosa', edad:12 },
      { tipo: 'asd', nombre: 'ff', edad:132 },
      { tipo: 'dfdf', nombre: 'vvv', edad:152 },
      { tipo: 'rrrr', nombre: 'ggg', edad:1442 
    ];
}
