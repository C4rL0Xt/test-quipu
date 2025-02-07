import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  options: string[] = []

  constructor( ) {
    this.options = [
      "Artistas","Álbums","Canciones","Estaciones"
    ]
  }
}
