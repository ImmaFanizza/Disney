import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../classes/character';
import { DataChacaracters } from '../interfaces/data-chacaracters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get<DataChacaracters>(environment.dinseyCharacters)
  }

  getById(_id:number){

    return this.http.get<Character>( environment.dinseyCharacters +_id)

  }
}
