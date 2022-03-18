import { Component, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { Character } from '../classes/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css']
})
export class CharactersTableComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService, private router:Router) { }

  ngOnInit(): void {

    this.characterService.getAllCharacters().subscribe(response=>{

      this.characters = response.data
      
      });
  }
  goTv(item:Character){
    this.router.navigate(['tvShow',item._id])
  }

}
