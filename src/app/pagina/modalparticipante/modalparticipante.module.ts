import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalparticipantePageRoutingModule } from './modalparticipante-routing.module';

import { ModalparticipantePage } from './modalparticipante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalparticipantePageRoutingModule
  ],
  declarations: [ModalparticipantePage]
})
export class ModalparticipantePageModule {}
