import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-modalparticipante',
  templateUrl: './modalparticipante.page.html',
  styleUrls: ['./modalparticipante.page.scss'],
})
export class ModalparticipantePage implements OnInit {

  constructor(private modalCtrl : ModalController, private service : ClienteService) { }

  ngOnInit() {
  }
  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const participante = form.value;
    this.service.create(participante).subscribe(response => {
      this.modalCtrl.dismiss(response);
    });

  }
  

}
