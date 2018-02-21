import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PersonaService } from '../../services/persona.service';

/**
 * Generated class for the AddPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-persona',
  templateUrl: 'add-persona.html',
})
export class AddPersonaPage {
  persona = {};
  id = null;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,
  public personaService: PersonaService) {
    this.id = navParams.get('id'); 
      if (this.id != 0){
        personaService.getPersona(this.id).subscribe(persona => {
          this.persona = persona;
        });  
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonaPage');
  }
  addPersona(){
    if (this.id != 0){
      this.personaService.editarPersona(this.persona);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Cambios con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.persona.id = Date.now();
      this.personaService.crearPersona(this.persona);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Creado con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    } 
    this.navCtrl.pop();       
  }

  deletePersona(){
    this.personaService.deletePersona(this.persona);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Eliminado con exito :)!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

}
