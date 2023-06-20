import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { ModalparticipantePage } from '../modalparticipante/modalparticipante.page';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.page.html',
  styleUrls: ['./participantes.page.scss'],
})
export class ParticipantesPage implements OnInit {
   
  participantes: Cliente[] = [];
  constructor(private service: ClienteService,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.participantes = response;
    })
  }
  remover(id:any){
    this.service.remove(id).subscribe(()=>{
      this.service.getAll().subscribe(response => {
        this.participantes = response;
      })
    })
  }
  novoParticipante(){
    this.modalCtrl.create({
      component: ModalparticipantePage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(response => {
        this.participantes = response;
      });
    })
  }

}
