import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../classes/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  character: Character = new Character();
  tvshow: [] = [];
  films: [] = [];
  videoGames: [] = [];
  shortFilms: [] = [];
  parkAttractions: [] = [];
  allies: [] = [];
  enemies: [] = [];
  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.characterService.getById(params['_id']).subscribe(data => {

        this.character = data;
        this.tvshow = data.tvShows;
        this.films = data.films;
        this.videoGames = data.videoGames;
        this.shortFilms = data.shortFilms;
        this.parkAttractions = data.parkAttractions;
        this.allies= data.allies;
        this.enemies= data.enemies;


      });


    });
  }


}
