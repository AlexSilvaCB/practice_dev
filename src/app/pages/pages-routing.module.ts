import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JogoVelhaComponent } from './jogo-velha/jogo-velha.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jvelha',
    component: JogoVelhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
