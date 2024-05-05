import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from 'src/app/pages/services/navigation.service';

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.scss'],
})
export class Link1Component extends NavigationService {
  constructor(navCtrl: NavController) {
    super(navCtrl);
  }
}
