import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TestComponent } from './components/test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoxbelComponent } from './components/foxbel/foxbel.component';
import { QuipuPageComponent } from './pages/quipu-page/quipu-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { HijoComponent } from './components/encapsulation/hijo/hijo.component';
import { PadreComponent } from './components/encapsulation/padre/padre.component';


@NgModule({
  declarations: [
    TestComponent,
    FoxbelComponent,
    QuipuPageComponent,
    SidebarComponent,
    ArtistInfoComponent,
    ReproductorComponent,
    HijoComponent,
    PadreComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class HomeModule { }
