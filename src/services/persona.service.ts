import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PersonaService{
    constructor(public afDB: AngularFireDatabase){

    }
    personas = [];
public getPersonas(){
    return this.afDB.list('personas/').valueChanges();
    }
public getPersona(id){
    return this.afDB.object('personas/'+ id).valueChanges();        
}
public crearPersona(persona){
    this.afDB.database.ref('personas/'+ persona.id).set(persona);
}
public editarPersona(persona){
    this.afDB.database.ref('personas/'+ persona.id).set(persona);    
}

public deletePersona(persona){
 
    this.afDB.database.ref('personas/'+ persona.id).remove();
        
}
}