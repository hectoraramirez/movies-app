import { MovieComponent } from './movie/movie.component';
import { HomemainComponent } from './homemain/homemain.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: HomemainComponent},
      {path: 'movieview/:id/:title', component: MovieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
