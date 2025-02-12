import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  //   {
  {      path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}
  //     path: 'auth',
  //     loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  //   },
  //   {
  //     path:'heroes',
  //     loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule)
  //   },
  //   {
  //     path:'404',
  //     component: Error404PageComponent
  //   },
  //   {
  //     path:'',
  //     redirectTo:'heroes',
  //     pathMatch:'full'
  //   },
  //   {
  //     path:'**',
  //     redirectTo:'404'
  //   }
  // ];

  // {
  //   path: 'reactive',
  //   loadChildren: () => import('./modules/reactive/reactive.module').then((m) => m.ReactiveModule),
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  // },{
  //   path: '**',
  //   redirectTo: 'reactive',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
