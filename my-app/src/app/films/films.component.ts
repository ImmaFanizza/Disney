import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../classes/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  character: Character = new Character();
  tvshow: [] = [];
  films:[]=[];
  videoGames:[]=[];

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.characterService.getById(params['_id']).subscribe(data => {

        this.character = data;
        this.tvshow = data.tvShows;
        this.films = data.films;
        this.videoGames= data.videoGames;


      });


    });
  }

}
