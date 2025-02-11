import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css'],
})
export class ArtistInfoComponent {
  artist = {
    nombre: 'Adele 21',
    followers: 321123 ,
    description: 'Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300',
  };
}
