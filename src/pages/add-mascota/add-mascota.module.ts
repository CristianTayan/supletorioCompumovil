import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMascotaPage } from './add-mascota';

@NgModule({
  declarations: [
    AddMascotaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMascotaPage),
  ],
})
export class AddMascotaPageModule {}
