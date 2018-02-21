import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonaService } from '../../services/persona.service';
import { AddPersonaPage } from '../add-persona/add-persona';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {
  personas = [];
   @ViewChild('myNav') nav: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public personaService: PersonaService) {
    personaService.getPersonas().subscribe(personas =>{
      this.personas = personas;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }
  registroPersona(id){
    this.navCtrl.push(AddPersonaPage, {id:id});
  }
  public crearPersona(){
    this.navCtrl.push(AddPersonaPage, {id:0});   
  }

}
