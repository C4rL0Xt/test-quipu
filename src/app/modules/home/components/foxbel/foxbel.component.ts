import { Component } from '@angular/core';

@Component({
  selector: 'app-foxbel',
  templateUrl: './foxbel.component.html',
  styleUrls: ['./foxbel.component.css']
})
export class FoxbelComponent {

  options: string[] = []

  constructor( ) {
    this.options = [
      "Artistas","Álbums","Canciones","Estaciones"
    ]
  }
  
}
