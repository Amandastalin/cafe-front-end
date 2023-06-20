import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalparticipantePage } from './modalparticipante.page';

const routes: Routes = [
  {
    path: '',
    component: ModalparticipantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalparticipantePageRoutingModule {}
