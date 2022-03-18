import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersTableComponent } from './characters-table/characters-table.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tabella',
    component: CharactersTableComponent
  },
  {
    path: 'tvShow/:_id',
    component: FilmsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
