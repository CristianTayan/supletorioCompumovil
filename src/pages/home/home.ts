import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPrincipal(){
    this.navCtrl.push('PersonaPage')
  }
  goToMascotas(){
    this.navCtrl.push('MascotaPage')
  }

}
