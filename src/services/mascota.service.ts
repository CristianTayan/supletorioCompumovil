import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MascotaService{
    constructor(public afDB: AngularFireDatabase){

    }
    mascotas = [];
    personas = [];
public getPersonas(){
    return this.afDB.list('personas/').valueChanges();
    }
public getMascotas(){
    return this.afDB.list('mascotas/').valueChanges();
    }
public getMascota(id){
    return this.afDB.object('mascotas/'+ id).valueChanges();        
}
public crearMascota(mascota){
    this.afDB.database.ref('mascotas/'+ mascota.id).set(mascota);
}
public editarMascota(mascota){
    this.afDB.database.ref('mascotas/'+ mascota.id).set(mascota);    
}

public deleteMascota(mascota){
 
    this.afDB.database.ref('mascotas/'+ mascota.id).remove();
        
}
}