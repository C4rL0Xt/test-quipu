import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { FoxbelComponent } from './components/foxbel/foxbel.component';
import { QuipuPageComponent } from './pages/quipu-page/quipu-page.component';

const routes: Routes = [
  {
    path: '',
    component: FoxbelComponent
  },
  {
    path:'test',
    component: QuipuPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
