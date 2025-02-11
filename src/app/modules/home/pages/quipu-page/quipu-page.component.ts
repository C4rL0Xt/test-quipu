import { Component } from '@angular/core';

@Component({
  selector: 'app-quipu-page',
  templateUrl: './quipu-page.component.html',
  styleUrls: ['./quipu-page.component.css']
})
export class QuipuPageComponent {
  menuOpen = false;



  menu() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}
