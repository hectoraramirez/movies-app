import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieviewComponent } from './movieview/movieview.component';
import { PlacesComponent } from './places/places.component';
import { ShowtimesmovieComponent } from './showtimesmovie/showtimesmovie.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    MovieviewComponent,
    PlacesComponent,
    ShowtimesmovieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    MovieviewComponent,
    PlacesComponent,
    ShowtimesmovieComponent
  ]
})
export class SharedModule { }
