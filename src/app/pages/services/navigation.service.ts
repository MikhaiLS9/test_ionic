import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(protected navCtrl: NavController) {}

  goHome() {
    this.navCtrl.navigateRoot('/tabs/tab2');
  }
}
