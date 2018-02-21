import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MascotaService } from '../../services/mascota.service';
import { AddMascotaPage } from '../add-mascota/add-mascota';

/**
 * Generated class for the MascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascota',
  templateUrl: 'mascota.html',
})
export class MascotaPage {
  mascotas = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController,
    public mascotaService: MascotaService, public navParams: NavParams) {
      mascotaService.getMascotas()
      .subscribe(mascotas =>{
        this.mascotas = mascotas;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotaPage');
  }
  public registroMascota(id){
    this.navCtrl.push(AddMascotaPage, {id:id});
  }
  public crearMascota(){
    this.navCtrl.push(AddMascotaPage, {id:0})
  }

}
