import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MascotaService } from '../services/mascota.service';
import { PersonaService } from '../services/persona.service';
import { AddMascotaPage } from '../pages/add-mascota/add-mascota';
import { AddPersonaPage } from '../pages/add-persona/add-persona';

export const firebaseConfig = {
  apiKey: "AIzaSyBtC6q9AEBE-awAgjpcoulUKTNjGMm4nYg",
  authDomain: "mascotas-f8c85.firebaseapp.com",
  databaseURL: "https://mascotas-f8c85.firebaseio.com",
  projectId: "mascotas-f8c85",
  storageBucket: "mascotas-f8c85.appspot.com",
  messagingSenderId: "836027611632"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddMascotaPage,
    AddPersonaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddMascotaPage,
    AddPersonaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonaService,
    MascotaService
  ]
})
export class AppModule {}
