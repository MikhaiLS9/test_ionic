import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.scss'],
})
export class Link2Component extends NavigationService {
  constructor(navCtrl: NavController) {
    super(navCtrl);
  }
 
}
