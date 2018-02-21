import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPersonaPage } from './add-persona';

@NgModule({
  declarations: [
    AddPersonaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPersonaPage),
  ],
})
export class AddPersonaPageModule {}
