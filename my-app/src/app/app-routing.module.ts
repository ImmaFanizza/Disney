import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersTableComponent } from './characters-table/characters-table.component';
import { DetailComponent } from './detail/detail.component';
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
    path: 'detail/:_id',
    component: DetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
