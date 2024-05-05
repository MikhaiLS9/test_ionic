import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-link3',
  templateUrl: './link3.component.html',
  styleUrls: ['./link3.component.scss'],
})
export class Link3Component extends NavigationService {
  constructor(navCtrl: NavController) {
    super(navCtrl);
  }
}
