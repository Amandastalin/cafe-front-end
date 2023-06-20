import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'participantes',
    pathMatch: 'full'
  },
  {
    path: 'participantes',
    loadChildren: () => import('./pagina/participantes/participantes.module').then( m => m.ParticipantesPageModule)
  },
  {
    path: 'modalparticipante',
    loadChildren: () => import('./pagina/modalparticipante/modalparticipante.module').then( m => m.ModalparticipantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
