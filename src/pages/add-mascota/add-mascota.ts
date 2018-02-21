import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MascotaService } from '../../services/mascota.service';

/**
 * Generated class for the AddMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-mascota',
  templateUrl: 'add-mascota.html',
})
export class AddMascotaPage {
  mascota = {id:null, nombre:null,tipo:null, persona:null, fecha:null, descripcion:null};
  id = null;
  personas=[];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,
    public mascotaService: MascotaService, public navParams: NavParams) {
      this.id = navParams.get('id');
      if(this.id != 0 ){
        mascotaService.getMascota(this.id)
        .subscribe(mascota => {
          this.mascota = mascota;
        });
      }
      mascotaService.getPersonas().subscribe(personas =>{
        this.personas = personas;  
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMascotaPage');
  }
  addMascota(){
    if (this.id != 0){
      this.mascotaService.editarMascota(this.mascota);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Cambios con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.mascota.id = Date.now();
      this.mascotaService.crearMascota(this.mascota);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Creado con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    } 
    this.navCtrl.pop();       
  }

  deleteMascota(){
    this.mascotaService.deleteMascota(this.mascota);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Eliminado con exito :)!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

}
