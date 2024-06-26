import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent
    });
    return await modal.present();
  }
}

